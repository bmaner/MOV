export default function Input({
  label,
  name,
  kind = 'text',
  register,
  type,
  required,
  ...rest
}) {
  return (
    <div>
      {kind === 'text' ? (
        <div className='rounded-md relative flex  items-center shadow-sm'>
          <input
            id={name}
            type={type}
            placeholder={label}
            required={required}
            {...rest}
            {...register}
            className='placeholder:text-center placeholder:text-sm appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500'
          />
        </div>
      ) : null}
      {kind === 'price' ? (
        <div className='rounded-md relative flex  items-center shadow-sm'>
          <div className='absolute left-0 pointer-events-none pl-3 flex items-center justify-center'>
            <span className='text-gray-500 text-sm'>$</span>
          </div>
          <input
            id={name}
            type={type}
            required={required}
            {...register}
            {...rest}
            className='appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500'
          />
          <div className='absolute right-0 pointer-events-none pr-3 flex items-center'>
            <span className='text-gray-500'>KRW</span>
          </div>
        </div>
      ) : null}
      {kind === 'phone' ? (
        <div className='flex rounded-md shadow-sm'>
          <span className='flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm'>
            +82
          </span>
          <input
            id={name}
            type={type}
            required={required}
            {...register}
            {...rest}
            className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500'
          />
        </div>
      ) : null}
    </div>
  )
}
