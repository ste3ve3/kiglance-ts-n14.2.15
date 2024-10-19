import { FC } from "react";
import { InputProps } from "@/@types/props";

const InputField: FC<InputProps> = ({
  type,
  placeholder,
  register,
  name,
  error,
  id,
  value,
  length,
  expected,
}) => (
  <>
    <input
      type={type}
      id={id}
      defaultValue={value}
      className={`bg-gray-50 border ${
        !error?.message
          ? "border-gray-300 text-gray-900"
          : "border-red-600 text-red-600"
      } text-sm rounded-lg block focus:outline-light-purple w-full p-2.5`}
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

export default InputField;
