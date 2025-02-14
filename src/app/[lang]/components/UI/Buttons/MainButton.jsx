import { cn } from "@/_helpers/cn";

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
    <buttonc
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "cursor-pointer bg-[#347AEC] opacity-100  hover:bg-[#6764E7] duration-500 rounded-[29px] py-[6px] px-[10px] md:px-[29px] text-center font-unbounded text-white",
        {
          "opacity-60": disabled,
        },
        className,
      )}
    >
      {children ?? label}
    </buttonc>
  );
};

export default MainButton;
