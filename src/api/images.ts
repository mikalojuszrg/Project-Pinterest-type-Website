import { PixabayImage } from "../types/image";
import axios from "axios";

const URL = "https://pixabay.com/api";
const KEY = "34412180-42360e656df8c51e07bc28475";

export const fetchImages = async (page: number): Promise<PixabayImage[]> => {
  const response = await axios.get(URL, { params: { key: KEY, page } });
  return response.data.hits;
};
