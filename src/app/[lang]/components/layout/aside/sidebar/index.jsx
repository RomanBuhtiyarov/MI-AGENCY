import { Unbounded } from "next/font/google";
import User from "./_user";
import { OpacityDivider } from "@/app/[lang]/components/UI/Dividers/OpacityDivider";
import { Nav } from "./nav";
import { Lang } from "@/app/[lang]/components/layout/aside/sidebar/lang";
import { Socials } from "@/app/[lang]/components/layout/aside/sidebar/socials";
import getCurrentUser from "@/actions/getCurrentUser";

const Unbound = Unbounded({ subsets: ["latin"] });

export default async function Sidebar({ lang }) {
  const user = await getCurrentUser();

  return (
    <aside className="w-full h-[80px] md:w-[250px] md:h-[610px]">
      <div className="w-full h-full bg-white shadow-lg rounded-t-[10px] md:rounded-[15px] pr-[0px] py-[15px] md:px-[20px] md:py-[25px] flex flex-row md:flex-col justify-evenly md:justify-between items-center md:items-start">
        <div>
          <div>
            <User user={user} font={Unbound} lang={lang} />
          </div>
          <div className="hidden md:block pt-[28px] pb-[20px]">
            <OpacityDivider />
          </div>
          <p className="hidden md:flex text-[#5E5E5E] text-[10px] font-[500] mb-[20px]">
            {lang.sidebar.discover}
          </p>
          <nav>
            <Nav user={user} lang={lang} />
          </nav>
        </div>
        <div>
          <Lang />
          <Socials />
        </div>
      </div>
    </aside>
  );
}
