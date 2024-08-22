import { Button } from '@/components/ui/button.tsx'
import { FacebookIcon, InstagramIcon } from '@/components/ui/icons-pack.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { footerContent } from '@/data/links.data.ts'

export const Footer = () => {
  return (
    <footer className='mt-[115px] rounded-t-md bg-primary pt-[71px] text-primary-foreground'>
      <div className='flex flex-col px-[10px] xl:container xl:flex-row'>
        <div className='pr-[74px] xl:w-1/2 xl:pr-[177px]'>
          <h2 className='text-4xl font-semibold xl:text-5xl'>OLX Killer</h2>
          <p className='max-w-[454px] pt-[15px] text-sm text-muted-foreground xl:text-base'>
            Our marketplace is a one-stop platform that connects thousands of
            sellers and buyers. We offer a wide range of products, including
            clothing and accessories, electronics, home and garden products,
            baby products, and more.
          </p>
          <div className='-ml-[10px] mt-10 hidden gap-[10px] xl:flex'>
            <a
              href='#'
              aria-label='Instagram'
              className='transition-colors hover:text-muted-foreground'
            >
              <InstagramIcon />
            </a>
            <a
              href='#'
              aria-label='Facebook'
              className='transition-colors hover:text-muted-foreground'
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-[49px] whitespace-nowrap pt-[76px] xl:grid-cols-3 xl:gap-24 xl:pt-0'>
          {footerContent.map((section, index) => (
            <div key={index}>
              <h3 className='mb-5 font-semibold'>{section.title}</h3>
              <ul className='flex flex-col gap-3'>
                {section.items.map((item, idx) => (
                  <li key={idx} className='leading-none'>
                    <a
                      href={item.link}
                      className='relative inline-block duration-300 before:absolute before:bottom-[-5px] before:left-1/2 before:h-[2px] before:w-0 before:bg-secondary-500-foreground before:transition-all before:duration-300 before:ease-in-out hover:text-secondary-500-foreground hover:transition-colors hover:before:left-0 hover:before:w-full'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='px-[10px] pt-[60px] xl:container xl:pt-[119px]'>
        <Separator className='bg-muted' />
        <div className='flex flex-col-reverse items-center justify-between gap-[30px] pb-[18px] pt-[60px] xl:flex-row xl:py-5'>
          <p>2024 OLX KILLER. All rights reserved</p>
          <Button
            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
            variant='outline'
            className='h-[42px] bg-primary px-[45px] py-[13px]'
          >
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
