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
  background-color: ${({ color }) => {
    switch (color) {
      case "primary":
        return "pink";
      case "secondary":
        return "white";
      default:
        return "gray";
    }
  }};
`;

export { StyledButton };
