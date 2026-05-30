import axiosInstance from "../../../lib/axiosInstance";

const getSectionImages = async () => {
  const response = await axiosInstance.get("pages/");
  return response?.data;
};

export default getSectionImages;
