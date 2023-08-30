import clsx from "clsx";
import { ComponentProps, FC, useId } from "react";
import { ReactComponent as ExclamationCircleSolid } from "@app/assets/icons/exclamation-circle-solid.svg";

interface InputProps {
  onChange: ComponentProps<"input">["onChange"];
  onBlur: ComponentProps<"input">["onBlur"];
  onFocus: ComponentProps<"input">["onFocus"];
  value: ComponentProps<"input">["value"];
  lable: string;
  placeholder: string;
  error?: string;
}

export const Input: FC<InputProps> = ({ lable, error, ...props }) => {
  const inputId = useId();
  const inputClasses = clsx(
    " border shadow-sm bg-white  rounded-md px-3 py-2 text-sm placeholder-gray-400  mb-2 outline-none transition-all",
    {
      "border-gray-300": !error,
      "border-red-300 focus:border-red-500 text-red-900": error,
    }
  );
  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-900 mb-1"
      >
        {lable}
      </label>
      <div className="relative inline-block">
        <input className={inputClasses} id={inputId} {...props} />
        {error && (
          <ExclamationCircleSolid className="h-4 w-4 absolute right-3 top-2.75 fill-red-500" />
        )}
      </div>

      <span
        className="block text-sm text-red-600"
        dangerouslySetInnerHTML={{ __html: error || "&nbsp" }}
      />
    </div>
  );
};