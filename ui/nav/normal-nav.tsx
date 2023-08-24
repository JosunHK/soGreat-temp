'use client'
import { ModeToggle } from '../mode-toggle';
import { LangToggle } from './lang-toggle';
import { TopLink } from './top-link';

export function NormalNav(){
    return(
        <>
            <div className="flex flex-row justify-evenly">
                <ModeToggle/>
                <LangToggle/>
                <TopLink/> 
            </div>
        </>
    )
}