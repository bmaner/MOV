export default function TextArea({ label, name, register, ...rest }) {
  return (
    <div>
      <textarea
        id={name}
        placeholder={label}
        {...register}
        className="placeholder:text-sm placeholder:text-center appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        rows={4}
        {...rest}
      />
    </div>
  );
}
