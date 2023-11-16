'use client';

import AsideNav from "@/_libs/aside-nav";
import {ItemNav} from "@/components/layout/aside/sidebar/nav/item_nav";
import {useState} from "react";

export const Nav = () => {
    
    const [currentTab, setCurrentTab] = useState("1");
    
    return(
        <ul className="flex flex-col items-start gap-[20px]">
            {AsideNav?.map?.((el, i) => (
                <ItemNav 
                    data={el} 
                    setCurrentTab={setCurrentTab}
                    currentTab={currentTab}
                />
            ))}
        </ul>
    )
}