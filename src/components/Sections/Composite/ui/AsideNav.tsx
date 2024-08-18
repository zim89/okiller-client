import { ChevronRight } from 'lucide-react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { CATEGORIES_DATA } from '@/data/categories.data'

export const AsideNav = () => {
  return (
    <aside className='w-[276px]'>
      <ul className='space-y-2.5'>
        {CATEGORIES_DATA.map(cat => (
          <li key={cat.name}>
            <Menubar className='h-auto rounded-none border-0 p-0'>
              <MenubarMenu key={cat.name}>
                <MenubarTrigger className='flex w-full items-center justify-between gap-2 rounded-none border-0 p-0'>
                  <cat.icon />
                  <p className='flex-1 text-start'>{cat.title}</p>
                  <ChevronRight />
                </MenubarTrigger>
                <MenubarContent
                  side='right'
                  className='rounded-none border-none'
                >
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarItem>Share</MenubarItem>
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </li>
        ))}
      </ul>
    </aside>
  )
}
