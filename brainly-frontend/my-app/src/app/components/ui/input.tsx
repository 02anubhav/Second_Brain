export default function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none ${className}`}
      {...props}
    />
  );
}
