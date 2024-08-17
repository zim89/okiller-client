import { footerContent } from '@/constants/footer.links.ts'
import { FacebookIcon, InstagramIcon } from '@/components/ui/icons-pack.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import { Button } from '@/components/ui/button.tsx'


export const Footer = () => {
  return (
    <footer className="bg-primary rounded-t-md text-primary-foreground pt-[71px] mt-[115px]">
      <div className="xl:container px-[10px] flex flex-col xl:flex-row">
        <div className="xl:w-1/2 pr-[74px] xl:pr-[177px]">
          <h2 className="text-4xl xl:text-5xl font-semibold">OLX Killer</h2>
          <p className="text-sm xl:text-base text-muted-foreground pt-[15px] max-w-[454px]">
            Our marketplace is a one-stop platform that connects thousands of sellers and buyers.
            We offer a wide range of products, including clothing and accessories, electronics, home and garden
            products, baby products, and more.
          </p>
          <div className="hidden xl:flex gap-[10px] mt-10 -ml-[10px]">
            <a href="#" aria-label="Instagram" className="hover:text-muted-foreground transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-muted-foreground transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-[49px] xl:gap-24 whitespace-nowrap pt-[76px] xl:pt-0">
          {footerContent.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-5">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="leading-none">
                    <a href={item.link} className="hover:text-muted">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:container px-[10px] pt-[60px] xl:pt-[119px]">
        <Separator className="bg-muted"/>
        <div className="pt-[60px] pb-[18px] xl:py-5 flex flex-col-reverse gap-[30px] xl:flex-row justify-between items-center">
          <p>2024 OLX KILLER. All rights reserved</p>
          <Button onClick={() => scrollTo({top: 0, behavior:'smooth'})} variant="outline" className="bg-primary py-[13px] px-[45px] h-[42px]">Back to top</Button>
        </div>
      </div>
    </footer>
  )
}
