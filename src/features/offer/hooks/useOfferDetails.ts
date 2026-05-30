import getOfferDetails from "../api/getOfferDetails";
import { useQuery } from "@tanstack/react-query";

const useOfferDetails = () => {
  return useQuery({
    queryKey: ["offerDetails"],
    queryFn: getOfferDetails,
  });
};

export default useOfferDetails;
