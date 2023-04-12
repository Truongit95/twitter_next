import useCurrentUser from "./useCurrentUser";

const useGlobal = () => {
    const { data: currentUser } = useCurrentUser();

    return {
        isLogin: currentUser && currentUser.id
    }
}
export default useGlobal;