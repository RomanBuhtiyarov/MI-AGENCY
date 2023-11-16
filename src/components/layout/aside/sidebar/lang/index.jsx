'use client';

import {ItemLang} from "@/components/layout/aside/sidebar/lang/item_lang";
import langList from "@/_libs/lang-list";
import {useState} from "react";

export const Lang = () => {
    
    const [activeLang, setActiveLang] = useState(1);
    
    return(
        <div className="flex items-center gap-[10px]">
            {langList?.map?.((l, _) => (
                    <ItemLang 
                        activeLang={activeLang}
                        setActiveLang={setActiveLang}
                        data={l}
                    />
            ))}
        </div>
    )
}