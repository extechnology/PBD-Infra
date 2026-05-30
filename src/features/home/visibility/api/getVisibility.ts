import axiosInstance from "../../../../lib/axiosInstance";

const getVisibility = async () => {
    const response = await axiosInstance.get("/our-visibility/");
    return response.data
}

export default getVisibility;