import { StyledButton } from "./styles";

type ButtonProps = {
  text: string;
  color: "primary" | "secondary";
  onClick?: () => void;
  width: number;
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  text,
  color,
  onClick,
  width,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      width={width}
      color={color}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${disabled && "disabled"}`}
    >
      {text}
    </StyledButton>
  );
};
