import { useScreenSize } from "@/hooks/useScreenSize";
import { useRootContext } from "@/state/rootContext";
import Image from "next/image";
// import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const ItemNav = ({ data, setCurrentTab, currentTab }) => {
  const { isMobile } = useScreenSize();
  const pathname = usePathname();
  const segments = pathname.replace(/^\/|\/$/g, "").split("/");
  const slug = segments.length > 1 ? segments.pop() : "";
  const router = useRouter();
  const { navigate } = useRootContext();
  return (
    <li key={data.key} onClick={() => setCurrentTab(data.key)}>
      <span
        onClick={() => {
          navigate(`/${data.locale}${data.href}`);
        }}
        // href={`/${data.locale}${data.href}`}
        // prefetch={false}
        className='flex flex-col text-center md:flex-row items-center gap-[7px] md:gap-[14px] item-nav cursor-pointer'
      >
        <span
          className={`w-[35px] h-[35px] md:w-[21px] md:h-[21px] rounded-[100%] flex items-center justify-center ${
            data.slug === slug ? "bg-[#347AEC] nav active-nav" : "nav bg-[#F2F5F8]"
          } ${
            isMobile &&
            data?.label.key === "get-tested" &&
            "bg-gradient-to-r from-[#347AEC] to-[#6764E7] nav active-nav"
          } `}
        >
          {data.slug === "my-profile" && data.userData?.photo ? (
            <Image
              className='rounded-[100%]'
              aria-label={"Change to:" + data.alt}
              width={35}
              height={35}
              src={data.userData.photo}
              alt={data.userData.first_name}
              loading={"lazy"}
            />
          ) : (
            data.icon
          )}
        </span>
        <p className='text-[9px] md:text-[16px] w-[50px] md:w-auto'>
          {data.label && Object.values(data.label)[1]}
        </p>
      </span>
    </li>
  );
};
