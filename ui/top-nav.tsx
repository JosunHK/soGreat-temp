'use client';
import { GlobalNav } from "./global-nav";
import { TopBand } from "./top-band";
import { SearchBand } from "./search-band";

export function TopNav(){
    return (
        <>
            <div className="w-vw h-72 relative z-10">
                <TopBand/>
                <GlobalNav/>
                <SearchBand/>
            </div>
        </>
    );
}