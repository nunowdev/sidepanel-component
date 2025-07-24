import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchInputWrapper } from "./styles";

interface SearchInputProps {
  inputWidth?: number;
  placeholder?: string;
  value: string;
  onInputChange: (value: string) => void;
  onClear: () => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  inputWidth,
  placeholder = "Search...",
  value,
  onInputChange,
  onClear,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  const handleClearInput = () => {
    onInputChange("");
    onClear();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClearInput();
    }
  };

  return (
    <SearchInputWrapper inputWidth={inputWidth}>
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
        <p
          onClick={handleClearInput}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          ✕
        </p>
      )}
    </SearchInputWrapper>
  );
};
