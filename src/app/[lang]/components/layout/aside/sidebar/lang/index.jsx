"use client";

import { ItemLang } from "./item_lang";

import langList from "@/_libs/lang-list";
import { useState } from "react";

export const Lang = () => {
  const [activeLang, setActiveLang] = useState("ua");

  return (
    <div className="flex items-center gap-[10px]">
      {langList?.map?.((l, _) => (
        <ItemLang
          activeLang={activeLang}
          setActiveLang={setActiveLang}
          data={l}
        />
      ))}
    </div>
  );
};
