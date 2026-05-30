import axiosInstance from "../../../../lib/axiosInstance";

const getCompletedProjects = async () => {
    const response = await axiosInstance.get("projects/")
    return response.data
}

export default getCompletedProjects