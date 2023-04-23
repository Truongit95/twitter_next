import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useCurrentUser from "../../hook/useCurrentUser";
import useEditModal from "../../hook/useEditModal";
import useUser from "../../hook/useUser";
import { toast } from "react-hot-toast";

import Modal from "../Modal";
import Input from "../Input";

const EditModal = () => {
    const { data: currentUser } = useCurrentUser();
    const { mutate: mutateFetcherUser } = useUser(currentUser?.id);

    const editModal = useEditModal();

    const [profileImage, setProfileImage] = useState('');
    const [coverImage, setCoverImage] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState('');

    useEffect(() => {
        setProfileImage(currentUser?.profileImage);
        setCoverImage(currentUser?.coverImage);
        setName(currentUser?.name);
        setUsername(currentUser?.username);
        setBio(currentUser?.bio);
    }, [currentUser]);


    const [loading, setLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setLoading(true);
            await axios.patch("/api/edit", {
                name,
                username,
                bio,
                profileImage,
                coverImage,
            });

            mutateFetcherUser();
            toast.success('Updated');

            editModal.onClose();
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    }, [name,
        username,
        bio,
        coverImage,
        profileImage, editModal, mutateFetcherUser]);


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={loading}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={loading}
            />
            <Input
                placeholder="Bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                disabled={loading}
            />

        </div>
    )

    return (
        <Modal
            disabled={loading}
            isOpen={editModal.isOpen}
            title="Edit your profile"
            actionLabel="Save"
            onClose={editModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
        />
    )
}
export default EditModal;