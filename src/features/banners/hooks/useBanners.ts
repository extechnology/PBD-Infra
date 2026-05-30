import { useQuery } from "@tanstack/react-query";
import getBanners from "../api/getBanners";

const useBanners = () => {
    return useQuery({
        queryKey: ["banners"],
        queryFn: getBanners,
    })
}

export default useBanners