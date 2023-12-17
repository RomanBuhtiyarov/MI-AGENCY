import { ArrowIcon } from "@/icons/Arrow.icon";

const NextPrevButton = ({
  type = "button",
  className = "",
  onClick,
  label = "",
  disabled,
}) => {
  const isPreviousBlock = className && className.includes("previous-block");
  const isBlockButton = className && className.includes("block-button");
  return (
    <button
      className={` ${className} py-[3px] px-[6px] rounded-[8px] text-[12px] text-[#262626] font-[500] w-[110px] h-[20px] duration-500 flex items-center gap-[2px] bg-[#347AEC] hover:bg-[#6764E7]  ${
        disabled ? "opacity-30" : "opacity-100"
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {isPreviousBlock ? (
        <>
          <ArrowIcon
            isPreviousBlock={isPreviousBlock}
            isBlockButton={isBlockButton}
            className={className}
          />
          <span>{label}</span>
        </>
      ) : (
        <>
          <p className="text-right">{label}</p>
          <ArrowIcon
            isPreviousBlock={isPreviousBlock}
            isBlockButton={isBlockButton}
            className={className}
          />
        </>
      )}
    </button>
  );
};

export default NextPrevButton;
