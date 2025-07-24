import { StyledButton } from "./styles";

type ButtonProps = {
  text: string;
  color: "primary" | "secondary";
  onClick?: () => void;
  width: number;
  disabled?: boolean;
};

export const Button = ({
  text,
  color,
  onClick,
  width,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton
      width={width}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};
