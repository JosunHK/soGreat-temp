'use client'

import { GlobalNavItem } from "./global-nav";
import { nav, topNav, type Item } from "../../lib/menu";
import { useContext, useEffect } from "react";
import { NavContext, NavContextType } from "./mobile-nav";

export function GlobalNav(){
    let ctx = useContext(NavContext) as NavContextType;
    let navItems:Item[] = [];
    navItems.push(...nav);
    navItems.push(...topNav);

    return(
        <>
            <div className="mt-10">
                {navItems.map((item, index) =>{
                    return (
                        <GlobalNavItem key={index} item={item} close={ctx.handleClick}/>
                    )
                })}
            </div>
        </>
    )
}