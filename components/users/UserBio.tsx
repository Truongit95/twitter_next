import { FC } from "react"
import useUser from "../../hook/useUser";
import useCurrentUser from "../../hook/useCurrentUser";

interface UserBioProps {
    userId: string
}

const UserBio: FC<UserBioProps> = ({ userId }) => {
    const { data: fetcherUser } = useUser(userId);
    const { data: currentUser } = useCurrentUser();
    return (<></>);
}
export default UserBio