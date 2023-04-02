import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();
  const handleBack = useCallback(
    () => {
      router.back();
    },
    [router]
  );
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-grow gap-2 items-center">
        {showBackArrow &&
          <BiArrowBack
            onClick={handleBack}
            size={20}
            color="white"
            className="cursor-pointer transition hover:opacity-70"
          />}
        <h1 className="text-white text-xl font-semibold">
          {label}
        </h1>
      </div>
    </div>
  );
};

export default Header;
