'use client'

import Link from 'next-intl/link';
import { Button } from '#/ui/shad-ui/button';
import { useTranslations } from 'next-intl';
import { topNav } from '#/lib/menu';

export function TopLink(){
const t = useTranslations('Nav');
    return (
        <div className="flex flex-row justify-evenly">
                {topNav.map((item) => {
                    return(
                        <Button asChild key={item.slug} variant="link">
                            <Link
                                href={`/${item.slug}`}
                                className={'block rounded-md align-center text-sm font-bolder text-gray-400 hover:text-primary'}>
                                {t(item.name)}
                            </Link>
                        </Button>
                    )
                })}
        </div> 
    );
}