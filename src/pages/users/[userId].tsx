import { useRouter } from "next/router";
import Header from "../../../components/Header";
import useUser from "../../../hook/useUser";
import { ClipLoader } from "react-spinners";
import UserHero from "../../../components/users/UserHero";
import UserBio from "../../../components/users/UserBio";

const UserView = () => {
    const router = useRouter();

    const { userId } = router.query;

    const { data: fetcherUser, isLoading } = useUser(userId as string);
    if (isLoading || !fetcherUser) {
        return (
            <div className="flex justify-center items-center h-full">
                <ClipLoader color="lightblue" size={80} />
            </div>
        )
    }

    return <>
        <Header label={fetcherUser?.name} showBackArrow />
        <UserHero userId={userId as string} />
        <UserBio userId={userId as string} />
    </>
};

export default UserView;
