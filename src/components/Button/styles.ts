import { styled } from "@linaria/react";

type ButtonProps = {
  disabled?: boolean;
  color: "primary" | "secondary";
  width: number;
};

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width}px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  font-weight: 600;
  font-family: "IBM Plex Mono", monospace;
  transition: all 350ms ease;
  color: ${({ color }) => (color === "secondary" ? "white" : "black")};
  border: ${({ color }) =>
    color === "secondary" ? "2px solid white" : "none"};
  background-color: ${({ color }) => {
    switch (color) {
      case "primary":
        return "pink";
      case "secondary":
        return "transparent";
      default:
        return "gray";
    }
  }};

  &.disabled {
    background-color: gray;
    color: white;
  }
`;

export { StyledButton };
