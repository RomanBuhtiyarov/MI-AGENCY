import { Logo } from "./logo";
import { Unbounded } from "next/font/google";
import User from "./_user";
import { OpacityDivider } from "@/app/[lang]/components/UI/Dividers/OpacityDivider";
import { Nav } from "./nav";
import { Lang } from "@/app/[lang]/components/layout/aside/sidebar/lang";
import { Socials } from "@/app/[lang]/components/layout/aside/sidebar/socials";
import getCurrentUser from "@/actions/getCurrentUser";
import { getDictionary } from "../../../../../../../getDictionary";

const Unbound = Unbounded({ subsets: ["latin"] });

export default async function Sidebar({ params }) {
  const lang = await getDictionary(params.lang);
  const user = await getCurrentUser();
  return (
    <aside className="w-[250px] h-[654px]">
      <div className="mb-[12px] ml-[5px]">
        <Logo />
      </div>
      <div className="w-full h-full bg-white shadow-lg rounded-[15px] px-[20px] py-[25px] flex flex-col justify-between items-start">
        <div>
          <div>
            <User user={user} font={Unbound} lang={lang} />
          </div>
          <div className="pt-[28px] pb-[20px]">
            <OpacityDivider />
          </div>
          <p className="text-[#5E5E5E] text-[10px] font-[500] mb-[20px]">
            {lang.sidebar.discover}
          </p>
          <nav>
            <Nav lang={lang} />
          </nav>
        </div>
        <div>
          <div>
            <Lang />
          </div>
          <div className="mt-[23px]">
            <Socials />
          </div>
        </div>
      </div>
    </aside>
  );
}
