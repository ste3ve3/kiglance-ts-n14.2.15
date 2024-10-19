import { FC } from "react";
import { InputProps } from "@/@types/props";

interface TextareaProps extends InputProps {
  rows: number;
}

const TextAreaField: FC<TextareaProps> = ({
  placeholder,
  register,
  name,
  error,
  id,
  value,
  rows,
  length,
  expected,
}) => (
  <>
    <textarea
      id={id}
      rows={rows}
      defaultValue={value}
      className={`bg-gray-50 border ${
        !error?.message
          ? "border-gray-300 text-gray-900"
          : "border-red-600 text-red-600"
      } text-sm rounded-lg focus:outline-light-purple block w-full p-2.5`}
      placeholder={placeholder}
      {...register(name)}
    />
    <p
      className={`text-xs text-red-600 min-h-4 flex items-center ${
        !error?.message ? "justify-end" : "justify-between"
      }`}
    >
      {error?.message && <span>{error.message}</span>}
      {(length as number) > 0 && expected && (
        <span className="text-light-purple">{`${length}/${expected}`}</span>
      )}
    </p>
  </>
);

export default TextAreaField;
