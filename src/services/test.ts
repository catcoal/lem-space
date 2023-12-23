import LemFetch from "@/utils/MyFetch";

export const GetRandomImages = () => {
  return new LemFetch("/random_image").get("/list?page=2&limit=60");
};
