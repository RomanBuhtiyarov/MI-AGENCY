import { Logo } from "@/components/layout/aside/sidebar/logo";
import { Unbounded } from "next/font/google";
import User from "@/components/layout/aside/sidebar/_user";
import { OpacityDivider } from "@/components/UI/Dividers/OpacityDivider";
import { Nav } from "@/components/layout/aside/sidebar/nav";
import { Lang } from "@/components/layout/aside/sidebar/lang";
import { Socials } from "@/components/layout/aside/sidebar/socials";
import getCurrentUser from "@/actions/getCurrentUser";

const Unbound = Unbounded({ subsets: ["latin"] });

export const Sidebar = async () => {
  const user = await getCurrentUser();
  return (
    <aside className="w-[250px] h-[654px]">
      <div className="mb-[12px] ml-[5px]">
        <Logo />
      </div>
      <div className="w-full h-full bg-white shadow-lg rounded-[15px] px-[20px] py-[25px] flex flex-col justify-between items-start">
        <div>
          <div>
            <User user={user} font={Unbound} />
          </div>
          <div className="pt-[28px] pb-[20px]">
            <OpacityDivider />
          </div>
          <p className="text-[#5E5E5E] text-[10px] font-[500] mb-[20px]">
            Discover yourself
          </p>
          <nav>
            <Nav />
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
};
