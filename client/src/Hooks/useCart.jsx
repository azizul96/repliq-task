import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useCart = () => {
    const myAxios = useAxios()
    const {data: carts =[], refetch} = useQuery({
        queryKey: ['carts'],
        queryFn: async()=>{
            const res = await myAxios.get(`/carts`)
            return res.data
        }
    })
    return [carts, refetch]
};

export default useCart;