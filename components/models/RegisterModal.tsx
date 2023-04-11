import { useCallback, useState } from "react";
import axios from "axios";
import useRegisterModal from "../../hook/useRegisterModal";
import useLoginModal from "../../hook/useLoginModal";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
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
    async () => {
      try {
        setLoading(true);

        await axios.post("/api/register", {
          email,
          password,
          userName,
          name
        });

        toast.success("Account created.");

        signIn("credentials", {
          email,
          password,
          userName,
          name
        });

        registerModal.onClose();
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      } finally {
        setLoading(false);
      }
    },
    [registerModal, email, password, userName, name]
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
        type="password"
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
