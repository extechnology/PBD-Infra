import getVisibility from "../api/getVisibility";
import { useQuery } from "@tanstack/react-query";

const useVisibility = () => {
    return useQuery({
        queryKey: ["visibility"],
        queryFn: getVisibility,
    })
}

export default useVisibility;
