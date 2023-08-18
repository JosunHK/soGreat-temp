'use client';

import { useTranslations } from 'next-intl';
import { nav, type Item } from '#/lib/nav';
import { NextLogo } from '#/ui/next-logo';
import Link from 'next-intl/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import Byline from './byline';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="absolute top-[25%] h-[15%] flex w-full flex-row border-b border-gray-800 lg:z-auto lg:w-vw lg:border-b-0 lg:border-r lg:border-gray-800">
      <div
        className={clsx('lg:static lg:block w-full h-full', {
          'fixed inset-x-0 top-14 mt-px': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="px-2 flex flex-row items-center h-full">
          {nav.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2  text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <GlobalNavItem key={section.slug} item={section} close={close} />
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

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  const t = useTranslations('Nav');

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-7 py-4 text-sm font-bolder',
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
