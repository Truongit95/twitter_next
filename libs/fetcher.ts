import axios from "axios";


const httpClient = axios.create();

httpClient.defaults.timeout = 6000;

const fetcher = (url: string) => httpClient.get(url).then((res) => res.data);
export default fetcher;
