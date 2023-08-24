'use client'

import dynamicIconImports from 'lucide-react/dynamicIconImports';
import left from '../assets/images/search-left.png';
import right from '../assets/images/search-right.png';
import { Input } from '#/ui/shad-ui/input';
import {Tabs, TabsContent, TabsList, TabsTrigger } from '#/ui/shad-ui/tabs';
import { searchCat } from '../lib/menu';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Icon from '#/ui/icon-props';
import { LucideIconType } from '#/ui/icon-props';
import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { type } from 'os';


export function SearchBand(){
    return (
        <>
            <div className='absolute top-[40%] h-[60%] bg-secondary w-full flex justify-center md:justify-between items-center' >
                <Image src={left} alt="search-image" className='h-full w-auto hidden md:block'/>
                <SearchSection/>
                <Image src={right} alt="search-image" className='h-full w-auto hidden md:block'/>
            </div>
        </>
    )
}

type SearchProps = {
    keyword : string,
    category : string
}

async function getSearchResult({keyword, category} : SearchProps) {
    //sleep 100ms
    await new Promise(r => setTimeout(r, 1000));
    console.log("bruh");
}

function SearchSection(){
    const t = useTranslations('Search');
    const [inputValue, setInputValue] = useState<string>('');
    const [currentCat, setCurrentCat] = useState<string>(searchCat && searchCat[0].slug);
    const handleSearch = async (key:string) => { 
        if(key !== 'Enter') return;
        const data = await getSearchResult({keyword: inputValue, category: currentCat});
    }

    return (
        <>
            <div className="w-screen md:w-[70%] flex justify-center md:block flex-col items-center">
                <Tabs defaultValue={searchCat && searchCat[0].slug} className="w-full md:w-[30%] overflow-scroll md:overflow-visible flex justify-center md:block">
                    <TabsList className="md:flex md:justify-between">
                        {searchCat.map((item, index) => {
                            return(
                                <TabsTrigger 
                                    className={clsx("bg-secondary w-full text-charcoal dark:text-charcoal outline-none transition-colors ease-in-out duration-300",
                                        "data-[state=active]:bg-primary rounded-xl",
                                        "data-[state=active]:text-off-white dark:data-[state=active]:text-off-white"
                                    )}
                                    onClick={(e) => setCurrentCat(item.slug)}
                                    key={index} value={item.slug}>
                                    <Icon className='hidden md:block' name={item.description as LucideIconType}/>
                                    {t(item.name)}
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                </Tabs>
                <Input
                    placeholder={t('search-placeholder')}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => handleSearch(e.key)}
                    className="bg-off-white dark:bg-off-white w-[70%] md:w-full focus-visible:none mt-2
                        dark:text-charcoal focus-visible:outline-1 focus-visible:outline-charcoal"/>
            </div>
        </>
    )
}