const Button = ({
  children,
  type = "button",
  bgColor = "bg-primary",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={
        className
          ? className
          : `text-lg px-10 py-3 font-medium font-serif focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-black/90 text-white text-semibold rounded-full hover:bg-black/50`
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
