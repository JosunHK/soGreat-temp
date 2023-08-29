'use client';
import { GlobalNav } from "./global-nav";
import { TopBand } from "./top-band";
import { SearchBand } from "../search-band";

export function TopNav(){
    return (
        <>
            <div className="w-vw h-72 z-10 sticky">
                <TopBand/>
                <GlobalNav/>
                <SearchBand/>
            </div>
        </>
    );
}