"use client";

import { ItemLang } from "./item_lang";

import langList from "@/_libs/lang-list";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Lang = () => {
  const pathName = usePathname();
  const [activeLang, setActiveLang] = useState(pathName.split("/")[1]);
  
  return (
    <div className="flex items-center gap-[10px]">
      {langList?.map?.((l, _) => {
        return (
          <ItemLang
            activeLang={activeLang}
            setActiveLang={setActiveLang}
            data={l}
            pathName={pathName}
          />
        );
      })}
    </div>
  );
};
