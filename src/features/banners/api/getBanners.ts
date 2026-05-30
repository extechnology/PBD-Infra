import axiosInstance from "../../../lib/axiosInstance";

const getBanners = async () => {
    const response = await axiosInstance.get(`/banner-images/`)
    return response.data
}

export default getBanners