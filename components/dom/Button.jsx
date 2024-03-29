import { cls } from "../../libs/client/utils";

export default function Button({ large = false, onClick, text, ...rest }) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] text-white px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none transition-colors",
        large ? "py-3 text-base" : "py-2 text-sm"
      )}
    >
      {text}
    </button>
  );
}
