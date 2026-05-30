import { useQuery } from "@tanstack/react-query";
import getOfferCategories from "../api/getOfferCategories";


const useOfferCategories = () => {
    return useQuery({
        queryKey: ["offer-categories"],
        queryFn: getOfferCategories,
    });
};

export default useOfferCategories;