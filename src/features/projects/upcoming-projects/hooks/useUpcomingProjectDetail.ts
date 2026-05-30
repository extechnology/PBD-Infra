import { useQuery } from "@tanstack/react-query";
import getUpcomingProjectsDetails from "../api/getUpcomingProjectsDetails";

const useUpcomingProjectDetail = () => {
    return useQuery({
        queryKey: ["upcoming-project"],
        queryFn: getUpcomingProjectsDetails,
    });
};

export default useUpcomingProjectDetail;