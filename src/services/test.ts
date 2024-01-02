import LemFetch from "@/utils/MyFetch";

export const GetRandomImages = () => {
  // https://picsum.photos/v2/list
  return new LemFetch("/random_image").get("/list?page=2&limit=60");
};
