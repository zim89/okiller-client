import { ItemCard } from '@/components/shared/ItemCard.tsx'
import { items } from '@/constants/items.constant.tsx'
import { Button } from '@/components/ui/button.tsx'

export const BestDeals = () => {
  return (
      <section className="container flex flex-col gap-5">
        <h2 className="h-[29px] font-medium text-[26px] text-foreground">Best deals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 self-center">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        <Button variant="outline" size="lg" className="mt-[15px] border-border rounded-lg py-3 text-foreground leading-none h-auto">Load more</Button>
      </section>
  )
}
