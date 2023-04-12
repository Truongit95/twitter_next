import useSWR from 'swr';
import fetcher from '../libs/fetcher'
import useGlobal from './useGlobal';

const useUsers = () => {

    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR('/api/users', fetcher);

    return {
        data, error, isLoading, mutate
    }
}
export default useUsers;