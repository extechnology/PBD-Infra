import axiosInstance from "../../../../lib/axiosInstance";

const getHeroVideo = async () => {
    const response = await axiosInstance.get("/hero-video/");
    return response.data;
}

export default getHeroVideo;