"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "#/ui/shad-ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "#/ui/shad-ui/dropdown-menu"
import {usePathname, useRouter} from 'next-intl/client'
import {useTranslations} from 'next-intl'

export function LangToggle() {
  const t = useTranslations('Options');
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="modeToggle" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => router.replace(pathname, {locale: 'en'})}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.replace(pathname, {locale: 'tc'})}>
          正體中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
