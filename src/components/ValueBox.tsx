import { FC } from "react";

interface Props {
  text: string;
  isSelected: boolean;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  handleClick?: () => void;
}

const ValueBox: FC<Props> = ({ text, className, isSelected, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`p-3 border ${
        isSelected ? "border-light-purple" : "border-light-gray"
      } rounded-xl flex items-center justify-center cursor-pointer ${className}`}
    >
      {text}
    </div>
  );
};

export default ValueBox;
