import axios from "axios";


const myAxios = axios.create({
    baseURL: 'https://server-beta-neon.vercel.app'
})
const useAxios = () => {
    return myAxios
};

export default useAxios;