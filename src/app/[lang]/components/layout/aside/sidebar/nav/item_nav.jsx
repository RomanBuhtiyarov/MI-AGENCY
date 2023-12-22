import Link from "next/link";
import { usePathname } from "next/navigation";

export const ItemNav = ({ data, setCurrentTab, currentTab }) => {
  const pathname = usePathname();
  const slug = pathname.replace("/", "").replace("/", "");
  return (
    <li key={data.key} onClick={() => setCurrentTab(data.key)}>
      <Link
        href={`/${data.locale}${data.href}`}
        prefetch={false}
        className="flex items-center gap-[14px] item-nav"
      >
        <span
          className={`w-[21px] h-[21px] rounded-[100%] flex items-center justify-center ${
            data.slug === slug
              ? "bg-[#347AEC] nav active-nav"
              : "nav bg-[#F2F5F8]"
          }`}
        >
          {data.icon}
        </span>
        <p>{Object.values(data.label)[0]}</p>
      </Link>
    </li>
  );
};
