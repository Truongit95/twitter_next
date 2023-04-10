import { useCallback, useState } from "react";
import useRegisterModal from "../../hook/useRegisterModal";
import useLoginModal from "../../hook/useLoginModal";

import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  const onToggle = useCallback(
    () => {
      if (loading) return;
      registerModal.onClose();
      loginModal.onOpen();
    },
    [loading, registerModal, loginModal]
  );

  const onSubmit = useCallback(
    () => {
      try {
        setLoading(true);

        // todo register and login
        // await login ....
        registerModal.onClose();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [registerModal]
  );

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <Input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}
        disabled={loading}
      />
      <Input
        placeholder="Username"
        onChange={e => setUserName(e.target.value)}
        value={userName}
        disabled={loading}
      />
      <Input
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        disabled={loading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {" "}Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      title="Create an user"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
export default RegisterModal;
