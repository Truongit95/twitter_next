import { FC, useMemo } from "react"
import { format } from 'date-fns'
import useUser from "../../hook/useUser";
import useCurrentUser from "../../hook/useCurrentUser";
import Button from "../Button";

interface UserBioProps {
    userId: string
}

const UserBio: FC<UserBioProps> = ({ userId }) => {
    const { data: fetcherUser } = useUser(userId);
    const { data: currentUser } = useCurrentUser();

    const createdAt = useMemo(() => {
        if (!currentUser?.createdAt)
            return null;
        return format(new Date(currentUser.createdAt), 'MMMM yyyy');
    }, [currentUser?.createdAt]);
    return (
        <div className="border-b-[1px] border-neutral-800 pb-4">
            <div className="flex justify-end p-2">
                {currentUser?.id === userId ? (
                    <Button secondary label="Edit" onClick={() => { }} />
                ) : (
                    <Button secondary label="Follow" onClick={() => { }} />
                )}
            </div>
        </div>
    );
}
export default UserBio