'use client';

import { useTranslations } from 'next-intl';
import { nav, type Item } from '#/lib/menu';
import { NextLogo } from '#/ui/next-logo';
import Link from 'next-intl/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import Byline from '../byline';

export function GlobalNav() {
  return (
    <div className="absolute top-[25%] h-[15%] flex w-full flex-row border-gray-800 md:z-auto md:w-vw md:border-b1 md:border-gray-800">
      <div
        className={clsx('md:static md:block w-full h-full', {
          hidden: true,
        })}
      >
        <nav className="px-2 flex flex-row items-center h-full">
          {nav.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2  text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <GlobalNavItem key={section.slug} item={section} />
                </div>
                {/* <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div> */}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close?: () => void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  const t = useTranslations('Nav');

  return (
    <Link
      href={`/${item.slug}`}
      onClick={close}
      className={clsx(
        'block rounded-md px-7 py-4 text-sm font-bolder transition-all ease-in-out duration-200',
        {
          'text-gray-400 hover:text-primary': !isActive,
          'text-primary': isActive,
        },
      )}
    >
      {t(item.name)}
    </Link>
  );
}
