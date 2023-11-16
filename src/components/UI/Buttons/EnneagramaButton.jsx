const EnneagramaButton = ({
  onClick,
  className = "",
  label = "",
  disabled,
  type = "button",
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bg-[#347AEC] ${
        disabled ? "opacity-60" : "opacity-100"
      } hover:bg-[#6764E7] duration-500 rounded-[10px] py-[6px] px-[10px] font-unbounded text-[14px] font-[400] text-white  ${className}`}
    >
      {children ?? label}
    </button>
  );
};

export default EnneagramaButton;
