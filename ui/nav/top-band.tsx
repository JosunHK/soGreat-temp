'use client'
import Image from 'next/image';
// import unitLogo from '../../assets/images/Test1.png';
import unitLogo from '../../assets/images/Test1.png';
import { NormalNav } from './normal-nav';
import { MobileNav } from './mobile-nav';
import useMediaQuery from '../../lib/useMediaQuery';

//TODO: dynamic unit logo 
export function TopBand() {
    let isBigScreen = useMediaQuery('(min-width: 768px)');
    return (
        <>
            <div className="absolute h-[25%] w-full flex flex-row justify-between">
                <div>
                    <Image src={unitLogo} className="h-full w-auto bg-contain" alt="logo"/>
                </div>
                {
                    isBigScreen 
                    ? <NormalNav/>
                    : <MobileNav/> 
                }
            </div>
        </>
    )
}