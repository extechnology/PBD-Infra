import { useMutation } from "@tanstack/react-query";
import postContact from "../api/contactApi";

const usePostContact = () => {
    return useMutation({
        mutationFn: (data: {
            name: string;
            email: string;
            phone: string;
            message: string;
        }) => postContact(data),
    });
};

export default usePostContact;