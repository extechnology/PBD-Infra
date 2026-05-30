import { useQuery } from "@tanstack/react-query";
import getCompletedProjects from "../api/getCompletedProjects";

const useCompletedProjects = () => {
    return useQuery({
        queryKey: ["completed-projects"],
        queryFn: () => getCompletedProjects()
    })
}

export default useCompletedProjects