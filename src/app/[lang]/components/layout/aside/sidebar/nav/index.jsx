"use client";

import { asideNav } from "@/_libs/aside-nav";
import { ItemNav } from "./item_nav";
import { useState } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";

export const Nav = ({ lang }) => {
  const asideElements = asideNav();
  const { isMobile } = useScreenSize();

  const [currentTab, setCurrentTab] = useState("1");
  return (
    <ul className="flex flex-row md:flex-col items-start gap-[20px]">
      {asideElements
        .filter((el) => {
          return !isMobile ? el.slug !== "my-profile" : true;
        })
        ?.map?.((el, i) => (
          <ItemNav
            data={{
              ...el,
              label: lang.sidebar.nav.filter((el) => {
                return !isMobile ? el.key !== "my-profile" : true;
              })[i],
              locale: lang.locale,
            }}
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
          />
        ))}
    </ul>
  );
};
