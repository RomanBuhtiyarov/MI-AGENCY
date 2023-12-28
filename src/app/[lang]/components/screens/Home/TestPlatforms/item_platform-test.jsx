import Link from "next/link";

export const ItemPlatformTest = ({ data }) => {
  return (
    <Link
      href={data.href}
      className="w-[48%] h-[100px] md:w-[190px] md:h-[120px] rounded-[10px] bg-gradient-to-r from-[#347AEC] to-[#6764E7] pl-[15px] pb-[13px] relative flex items-end justify-start"
    >
      <p className="text-[10px] md:text-[12px] text-white font-[300] leading-4">
        <span>
          {Object.values(data.name)[0]} <br /> {Object.values(data.name)[1]}
        </span>
      </p>
      <div className="bg-white w-[43px] h-[43px] rounded-[100%] flex items-center justify-center text-center absolute right-[10px] top-[10px] md:right-[13px] md:top-[13px]">
        <span>{data.emoji}</span>
      </div>
    </Link>
  );
};
