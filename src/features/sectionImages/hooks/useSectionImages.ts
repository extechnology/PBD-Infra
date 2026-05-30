import { useQuery } from "@tanstack/react-query";
import getSectionImages from "../api/getSectionImages";

export const useSectionImages = () => {
  return useQuery({
    queryKey: ["sectionImages"],
    queryFn: () => getSectionImages(),
  });
};
