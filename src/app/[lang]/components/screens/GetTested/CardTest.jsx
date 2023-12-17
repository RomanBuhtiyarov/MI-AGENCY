import Image from "next/image";
import { Unbounded } from "next/font/google";
import Link from "next/link";

const Unbound = Unbounded({ subsets: ["latin"] });
const CardTest = ({ data }) => {
  return (
    <div className="max-w-[408px] w-full shadow-lg rounded-[15px]">
      <div
        className={`bg-gradient-to-r w-full h-[176px] bg-gradient-to-r from-[#347AEC] to-[#6764E7] rounded-t-[15px] pt-[12px] pb-[24px] overflow-hidden`}
      >
        <Image
          loading={"lazy"}
          className="mx-auto"
          src={data.owner.path}
          alt={"owner"}
          width={64}
          height={22}
        />
        <div className="w-[350px] h-[130px] relative mx-auto">
          <Image
            className="object-contain mx-auto"
            src={data.banner}
            alt={"banner"}
            fill
          />
        </div>
      </div>
      <div className="h-[108px] bg-white rounded-b-[15px] pt-[12px] pb-[20px] pl-[20px] pr-[15px]">
        <div className="mb-[20px]">
          <h2 className={Unbound.className + " " + "text-[16px] font-[400]"}>
            {data.test_blocks[0].label}
          </h2>
          <p className="text-[#5E5E5E] text-[14px] font-[500] mb-[15px] mt-[3px]">
            {data.test_blocks[0].description}
          </p>
        </div>
        <Link
          href={!data.development ? `/${data.locale}/test/${data.type}` : "#"}
          className={`${
            Unbound.className
          } text-white text-[14px] font-[400] py-[7px] px-[15px] bg-[#347AEC] rounded-[100px] ${
            data.development ? "opacity-60" : "opacity-100"
          }`}
        >
          {data.development
            ? data.lang.test_page.test_in_dev_btn
            : data.lang.test_page.pass_the_test_btn}
        </Link>
      </div>
    </div>
  );
};

export default CardTest;
