import { useQuery } from "@tanstack/react-query";
import getHeroVideo from "../api/getHeroVideo";

const useHeroVideo = () => {
    return useQuery({
        queryKey: ["hero-video"],
        queryFn: () => getHeroVideo(),
    })
}

export default useHeroVideo;