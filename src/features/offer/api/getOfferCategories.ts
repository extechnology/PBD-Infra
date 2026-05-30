import axiosInstance from "../../../lib/axiosInstance";

const getOfferCategories = async () => {
    const response = await axiosInstance.get("we-offer-category/");
    return response.data;
};

export default getOfferCategories;