// Ваша кнопка
const MainButton = ({
  label,
  lang,
  onClick,
  className = "",
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
      } hover:bg-[#6764E7] duration-500 rounded-[29px] py-[6px] px-[10px] md:px-[29px] text-center font-unbounded text-white ${className}`}
    >
      {children ?? label}
    </button>
  );
};

export default MainButton;
