import { FC } from "react";
import useUser from "../../hook/useUser";
import Image from "next/image";
import Avatar from "../Avatar";

interface UserHeroProps {
    userId: string
}

const UserHero: FC<UserHeroProps> = ({ userId }) => {
    const { data: fetcherUser } = useUser(userId);
    return (
        <div>
            <div className="bg-neutral-400 h-44 relative">
                {fetcherUser?.coverImage && (
                    <Image src={fetcherUser?.coverImage} fill alt="Cover Image" style={{ objectFit: 'cover' }} />
                )}
                <div className="absolute -bottom-16 left-4">
                    <Avatar userId={userId} isLarge hasBorder />
                </div>
            </div>
        </div>
    )
}
export default UserHero;