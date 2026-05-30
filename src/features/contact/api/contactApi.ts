import axiosInstance from "../../../lib/axiosInstance";

const postContact = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const response = await axiosInstance.post("/contact/", data);
  return response.data;
};


export default postContact;
  