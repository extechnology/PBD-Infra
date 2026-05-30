import { useQuery } from "@tanstack/react-query";
import getPrimeService from "../api/getPrimeService";



const usePrimeService = () => {
    return useQuery({
        queryKey: ["prime-service"],
        queryFn: getPrimeService,
    });
};

export default usePrimeService;