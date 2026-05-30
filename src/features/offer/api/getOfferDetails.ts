import axiosInstance from "../../../lib/axiosInstance";


const getOfferDetails = async () => {
    const response = await axiosInstance.get("/we-offer/");
    return response.data;
}

export default getOfferDetails;