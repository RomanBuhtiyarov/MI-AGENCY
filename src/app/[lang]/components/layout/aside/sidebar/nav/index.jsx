"use client";

import { asideNav } from "@/_libs/aside-nav";
import { ItemNav } from "./item_nav";
import { useState } from "react";

export const Nav = ({ lang }) => {
  const asideElements = asideNav();
  const [currentTab, setCurrentTab] = useState("1");
  return (
    <ul className="flex flex-col items-start gap-[20px]">
      {asideElements?.map?.((el, i) => (
        <ItemNav
          data={{ ...el, label: lang.sidebar.nav[i], locale: lang.locale }}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
      ))}
    </ul>
  );
};
