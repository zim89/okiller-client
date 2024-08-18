import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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
    <aside className='w-[310px]'>
      <Menubar className='h-auto rounded-none border-0 p-0'>
        <ul className='space-y-2.5'>
          {CATEGORIES_DATA.map(cat => (
            <li key={cat.name}>
              <MenubarMenu key={cat.name}>
                <MenubarTrigger className='flex w-full cursor-pointer items-center justify-between gap-2 rounded-[81px] border-0 px-[17px] py-[5px] text-base/4 font-normal transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground'>
                  <cat.icon />
                  <p className='flex-1 text-start'>{cat.title}</p>
                  <ChevronRight />
                </MenubarTrigger>
                <MenubarContent
                  side='right'
                  sideOffset={15}
                  className='grid grid-cols-3 gap-[50px] rounded-[15px] border-none bg-background px-[75px] py-12 text-foreground shadow-[1px_1px_5px_0_rgba(78,78,78,0.19)]'
                >
                  {cat.sub.map(sub => (
                    <div key={sub.label} className='space-y-5'>
                      <h4 className='text-base/[19.36px] font-semibold'>
                        {sub.label}
                      </h4>
                      <ul className='space-y-2.5'>
                        {sub.items.map(item => (
                          <li key={item.label}>
                            <Link to={item.href}>
                              <MenubarItem className='inline-block cursor-pointer bg-none p-0 text-base/[19.36px] font-normal transition-colors duration-300 focus:bg-background focus:text-accent'>
                                {item.label}
                              </MenubarItem>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </li>
          ))}
        </ul>
      </Menubar>
    </aside>
  )
}
