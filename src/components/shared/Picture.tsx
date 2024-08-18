import { cn } from '@/lib/utils'

export const Picture = ({
  src,
  srcset,
  alt,
  type = 'image/jpeg',
  styles,
}: {
  src: string
  srcset: { width: number; items: string[] }[]
  alt: string
  type?: string
  styles?: string
}) => {
  const MEDIA_QUERIES = ['(min-width: 1440px)', '(min-width: 320px)']
  return (
    <picture>
      {srcset.map((srcset, index) => (
        <source
          type={type}
          key={srcset.width}
          media={MEDIA_QUERIES[index]}
          srcSet={`${srcset.items[0]}, ${srcset.items[1]} 2x`}
        />
      ))}
      <img
        className={cn('block h-auto w-full object-cover', styles)}
        src={src}
        alt={alt}
        loading='lazy'
      />
    </picture>
  )
}