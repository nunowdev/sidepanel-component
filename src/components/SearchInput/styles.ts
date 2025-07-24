import { styled } from "@linaria/react";

type SearchInputProps = {
  inputWidth?: number;
};

const SearchInputWrapper = styled.div<SearchInputProps>`
  display: flex;
  align-items: center;
  background-color: #2c2c2c;
  border-radius: 4px;
  padding: 8px 14px;
  height: 40px;
  width: ${(props) => (props.inputWidth ? `${props.inputWidth}px` : "100%")};

  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    color: white;
    outline: none;
    padding-left: 12px;
    font-size: 16px;
    color: pink;

    &::placeholder {
      color: #888888;
    }
  }

  .spacer {
    flex-grow: 1;
  }

  p {
    cursor: pointer;
    color: #888888;
    margin-left: 8px;

    &:hover {
      color: white;
    }
  }
`;

export { SearchInputWrapper };
