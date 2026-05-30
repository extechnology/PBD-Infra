import axiosInstance from "../../../../lib/axiosInstance";

const getUpcomingProjectsDetails = async () => {
  const response = await axiosInstance.get("/upcoming-projects/");
  return response.data;
};

export default getUpcomingProjectsDetails;