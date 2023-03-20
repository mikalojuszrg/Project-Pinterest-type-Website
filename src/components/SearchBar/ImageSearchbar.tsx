import { useAppDispatch, useAppSelector } from "../../hooks/store";

import SearchBar from "./SearchBar";
import { onChange } from "../../store/searchSlice";

const ImageSearchbar = () => {
  const value = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();

  const handleChangeSearch = (value: string) => {
    dispatch(onChange(value));
  };

  return <SearchBar value={value} setValue={handleChangeSearch} />;
};

export default ImageSearchbar;
