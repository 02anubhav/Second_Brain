interface ButtonProps {
  variant: "primary" | "secondary" | "outline";
  size: "sm" | "md" | "lg";
  text: String;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const variant = {
  base: "rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer tansition-colors duration-200 inline-flex items-center gap-2",
  primary:
    "bg-gradient-to-b from-indigo-500 to-indigo-700 text-white hover:scale-90 ring-indigo-500",
  secondary: "bg-white text-indigo-700 border border-indigo-700",
  outline: "bg-transparent text-indigo-700 border border-indigo-700",
};

const size = {
  sm: "px-1 py-1 text-xs font-medium",
  md: "px-2 py-2 text-sm font-semibold",
  lg: "px-3 py-3 text-md font-semibold font-inter",
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${variant.base} ${variant[props.variant || "primary"]} ${
        size[props.size || "md"]
      }`}
      onClick={props.onClick}
    >
      {props.icon} {props.text}
    </button>
  );
}
