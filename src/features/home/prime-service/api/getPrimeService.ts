import axiosInstance from "../../../../lib/axiosInstance";

const getPrimeService = async () => {
    const response = await axiosInstance.get("/our-visibility/");
    return response.data;
};

export default getPrimeService;