'use client'

import Image from 'next/image';
import { ModeToggle } from './mode-toggle';
import { LangToggle } from './lang-toggle';
import { TopLink } from './top-link';
import unitLogo from '../assets/images/Test1.png';

//TODO: dynamic unit logo 
export function TopBand() {
    return (
        <>
            <div className="absolute h-[25%] w-full flex flex-row justify-between">
                <div>
                    <Image src={unitLogo} className="h-full bg-contain" alt="logo"/>
                </div>
                <div className="flex flex-row justify-evenly">
                    <ModeToggle/>
                    <LangToggle/>
                    <TopLink/>
                </div>
            </div>
        </>
    )
}