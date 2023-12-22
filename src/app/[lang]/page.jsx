import GreatingBlock from "./components/screens/Home/GreatingBlock";
import { Unbounded } from "next/font/google";
import TestPlatforms from "./components/screens/Home/TestPlatforms";
import Link from "next/link";
import { getDictionary } from "../../../getDictionary";
const Unbound = Unbounded({ subsets: ["latin"] });

export default async function Home({ params }) {
  const lang = await getDictionary(params.lang);
  return (
    <div>
      <GreatingBlock lang={lang} />
      <section className="py-[23px]">
        <h2
          className={`${Unbound.className} text-[#262626] text-[22px] font-[400]`}
        >
          {lang.home.header}
        </h2>
        <TestPlatforms font={Unbound} lang={lang.test_platforms} />
        <Link href={"/get-tested"}>
          <button
            className={`${Unbound.className} text-white text-[18px] font-[400] py-[7px] px-[15px] bg-[#347AEC] rounded-[100px] mt-[30px]`}
          >
            {lang.home.button}
          </button>
        </Link>
      </section>
    </div>
  );
}
