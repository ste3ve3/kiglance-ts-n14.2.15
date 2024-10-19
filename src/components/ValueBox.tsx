import { FC } from "react";

interface Props {
  text: string;
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

const ValueBox: FC<Props> = ({ text, className }) => {
  return (
    <div
      className={`p-3 border border-light-gray rounded-xl flex items-center justify-center ${className}`}
    >
      {text}
    </div>
  );
};

export default ValueBox;
