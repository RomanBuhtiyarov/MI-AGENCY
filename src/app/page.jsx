import GreatingBlock from "@/components/screens/Home/GreatingBlock";
import { Unbounded } from "next/font/google";
import TestPlatforms from "@/components/screens/Home/TestPlatforms";
import Link from "next/link";
const Unbound = Unbounded({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <GreatingBlock />
      <section className="py-[40px]">
        <h2
          className={`${Unbound.className} text-[#262626] text-[22px] font-[400]`}
        >
          Для кого створена ця платформа?
        </h2>
        <TestPlatforms font={Unbound} />
        <Link href={"/get-tested"}>
          <button
            className={`${Unbound.className} text-white text-[18px] font-[400] py-[7px] px-[15px] bg-[#347AEC] rounded-[100px] mt-[30px]`}
          >
            Пройти тестування
          </button>
        </Link>
      </section>
    </div>
  );
}
