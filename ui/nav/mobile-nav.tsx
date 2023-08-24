'use client'

import { MenuSquare } from "lucide-react"
import { Button } from "#/ui/shad-ui/button"
import { useState } from "react";
import { GlobalNav } from "./mobile-global-nav";
import { createContext, useContext } from "react";
import { ModeToggle } from '../mode-toggle';
import { LangToggle } from './lang-toggle';
import clsx from "clsx";

export interface NavContextType{
    handleClick : () => void,
    isMenuOpen : boolean | null
}

export const NavContext = createContext<NavContextType | null>(null);

const NavMenu = () => {
    let ctx = useContext(NavContext) as NavContextType;
    return (
        <>
            {ctx.isMenuOpen && <div className="z-10 fixed h-screen left-0 top-0 w-screen backdrop-blur-sm"/>}
            <div className={clsx("relative z-20 mr-0 ml-auto bg-off-white dark:bg-charcoal h-screen w-64 translate-x-full", 
                ctx.isMenuOpen && "animate-[sneak-in_0.5s_ease-in-out_forwards]",
                //don't play animation on null
                ctx.isMenuOpen === false && "animate-[sneak-out_0.5s_ease-in-out_forwards]" 
            )} >
                <GlobalNav/>
            </div>
        </>
    )
}

export function MobileNav(){
    const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null);
    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <>
            <NavContext.Provider value={{handleClick: handleClick, isMenuOpen:isMenuOpen}}>
                <div className="z-50 isolate overflow-x-clip">
                    <div className="absolute right-0 top-0 z-20">
                        <ModeToggle/>
                        <LangToggle/>
                        <MenuButton/>
                    </div>
                    <NavMenu/>
                </div>
            </NavContext.Provider>
        </>
    )
}

function MenuButton() {
    let ctx = useContext(NavContext) as NavContextType;
    return (
        <Button variant="modeToggle" onClick={ctx.handleClick} size="icon">
            <MenuSquare/>
        </Button>
    )
}