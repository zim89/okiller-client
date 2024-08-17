import React from 'react';
import { HeartIcon } from '@/components/ui/icons-pack.tsx'
import { Button } from '@/components/ui/button.tsx'

interface ItemCardProps {
  image: string;
  description: string;
  price: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({ image, description, price }) => {
  return (
    <div className="flex flex-col gap-[15px] w-[173px] xl:w-[305px]">
      <div className="cursor-pointer relative">
        <img src={image} alt="Item" className="w-full object-cover rounded-sm" />
        <div className="mt-[15px]">
          <HeartIcon className="absolute right-[10px] top-[7px] xl:hidden" />
          <p className="text-sm xl:text-base text-foreground">{description}</p>
        </div>
      </div>
      <div className="h-6 flex justify-between items-center mt-[10px] xl:mt-5">
        <span className="xl:text-2xl text-foreground">{price} UAH</span>
        <HeartIcon className="hidden xl:block cursor-pointer"/>
      </div>
      <Button className="py-3 leading-none rounded-lg">Buy</Button>
    </div>
  );
};
