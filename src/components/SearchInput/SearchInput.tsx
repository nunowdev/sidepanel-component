import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchInputWrapper } from "./styles";
import { FaXmark } from "react-icons/fa6";

interface SearchInputProps {
  inputWidth?: number;
  placeholder?: string;
  className?: string;
  value: string;
  onInputChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  inputWidth,
  placeholder = "Search...",
  value,
  onInputChange,
  className,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  const handleClearInput = () => {
    onInputChange("");
  };

  return (
    <SearchInputWrapper inputWidth={inputWidth} className={className}>
      <FaSearch color="pink" />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <span className="spacer" role="presentation"></span>
      {value && (
        <FaXmark onClick={handleClearInput} color="pink" cursor={"pointer"} />
      )}
    </SearchInputWrapper>
  );
};
