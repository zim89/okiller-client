import React from 'react';
import { Button } from '@/components/ui'
import { LongArrowAltRightIcon } from '@/components/ui/icons-pack.tsx'
import { Banner } from '@/assets'

export const PromoSection: React.FC = () => {
  return (
    <section className="container pt-[170px] xl:pt-[138px] relative">
      <img
        src={Banner}
        alt="Laptop"
        className="hidden xl:block w-full"
      />
      <div className="xl:container flex xl:block flex-col items-center justify-center text-center xl:text-left gap-[18px] xl:absolute xl:bottom-0 xl:left-0 xl:w-2/5">
        <h2 className="text-4xl xl:text-5xl font-medium text-foreground mb-8 md:w-full">
          Do you want to sell on our platform?
        </h2>
        <Button size="lg" className="leading-none p-[5px] pl-[37px] h-[53px] rounded-[60px]">
          Register as a seller
          <span className="flex items-center justify-center rounded-full bg-background text-primary size-[43px] ml-6">
            <LongArrowAltRightIcon />
          </span>
        </Button>
      </div>
    </section>
  );
};
