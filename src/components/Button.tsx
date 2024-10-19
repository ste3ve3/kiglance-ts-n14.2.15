import { FC } from "react";

interface Props {
  text: string;
  disabled?: boolean;
  background: "bg-light-purple" | "bg-dark-gray" | string;
  className: React.HTMLAttributes<HTMLElement>["className"];
  handleClick?: () => void;
}

const Button: FC<Props> = ({
  text,
  background,
  className,
  handleClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`px-4 py-2.5 rounded-lg ${background} ${className} transition duration-200`}
    >
      {text}
    </button>
  );
};

export default Button;
