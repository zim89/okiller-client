import arts_crafts_375_x2 from '@/assets/images/categories/arts&crafts-375-x2.png'
import arts_crafts_375 from '@/assets/images/categories/arts&crafts-375.png'
import arts_crafts_1440_x2 from '@/assets/images/categories/arts&crafts-1440-x2.png'
import arts_crafts_1440 from '@/assets/images/categories/arts&crafts-1440.png'
import beauty_health_375_x2 from '@/assets/images/categories/beauty&health-375-x2.png'
import beauty_health_375 from '@/assets/images/categories/beauty&health-375.png'
import beauty_health_1440_x2 from '@/assets/images/categories/beauty&health-1440-x2.png'
import beauty_health_1440 from '@/assets/images/categories/beauty&health-1440.png'
import clothing_375_x2 from '@/assets/images/categories/clothing-375-x2.png'
import clothing_375 from '@/assets/images/categories/clothing-375.png'
import clothing_1440_x2 from '@/assets/images/categories/clothing-1440-x2.png'
import clothing_1440 from '@/assets/images/categories/clothing-1440.png'
import electronics_375_x2 from '@/assets/images/categories/electronics-375-x2.png'
import electronics_375 from '@/assets/images/categories/electronics-375.png'
import electronics_1440_x2 from '@/assets/images/categories/electronics-1440-x2.png'
import electronics_1440 from '@/assets/images/categories/electronics-1440.png'
import home_garden_375_x2 from '@/assets/images/categories/home&garden-375-x2.png'
import home_garden_375 from '@/assets/images/categories/home&garden-375.png'
import home_garden_1440_x2 from '@/assets/images/categories/home&garden-1440-x2.png'
import home_garden_1440 from '@/assets/images/categories/home&garden-1440.png'
import pets_375_x2 from '@/assets/images/categories/pets-375-x2.png'
import pets_375 from '@/assets/images/categories/pets-375.png'
import pets_1440_x2 from '@/assets/images/categories/pets-1440-x2.png'
import pets_1440 from '@/assets/images/categories/pets-1440.png'
import {
  AppleIcon,
  BabyCarriageIcon,
  BookIcon,
  BrushIcon,
  BuildingIcon,
  CameraIcon,
  CarIcon,
  CouchIcon,
  DumbbellIcon,
  FlowerTulipIcon,
  GamepadIcon,
  GiftIcon,
  HeartIcon,
  HomeIcon,
  MusicIcon,
  PaintBrushIcon,
  PawIcon,
  PlaneIcon,
  TshirtIcon,
  TvIcon,
} from '@/components/ui/icons-pack'

interface SubCategory {
  label: string
  items: { label: string; href: string }[]
}

interface Category {
  name: string
  title: string
  icon: React.FC
  image: {
    alt: string
    src: string
    type: string
    srcset: { width: number; items: string[] }[]
  }
  rating: number
  sub: SubCategory[]
}

const SUB_DATA: SubCategory[] = [
  {
    label: "Women's Clothing",
    items: [
      { label: 'Dresses', href: '/' },
      { label: 'Tops and Blouses', href: '/' },
      { label: 'Pants and Jeans', href: '/' },
      { label: 'Skirts', href: '/' },
      { label: 'Outerwear', href: '/' },
    ],
  },
  {
    label: "Men's Clothing",
    items: [
      { label: 'Shirts', href: '/' },
      { label: 'Trousers and Jeans', href: '/' },
      { label: 'Jackets and Coats', href: '/' },
      { label: 'Suits and Blazers', href: '/' },
      { label: 'Active wear', href: '/' },
    ],
  },
  {
    label: "Kids' Clothing",
    items: [
      { label: 'Boys Clothing', href: '/' },
      { label: 'Girls Clothing', href: '/' },
      { label: 'Baby Clothing', href: '/' },
      { label: 'School Uniforms', href: '/' },
      { label: 'Outerwear', href: '/' },
    ],
  },
  {
    label: 'Footwear',
    items: [
      { label: "Women's Footwear", href: '/' },
      { label: "Men's Footwear", href: '/' },
      { label: 'Kids Footwear', href: '/' },
      { label: 'Sports Shoes', href: '/' },
      { label: 'Boots', href: '/' },
    ],
  },
  {
    label: 'Accessories',
    items: [
      { label: 'Bags and Purses', href: '/' },
      { label: 'Hats and Caps', href: '/' },
      { label: 'Scarves and Gloves', href: '/' },
      { label: 'Belts', href: '/' },
      { label: 'Jewelry and Watches', href: '/' },
    ],
  },
]

export const CATEGORIES_DATA: Category[] = [
  {
    name: 'clothing&accessories',
    title: 'Clothing and Accessories',
    icon: TshirtIcon,
    image: {
      alt: 'hero image',
      src: clothing_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [clothing_375, clothing_375_x2] },
        { width: 1440, items: [clothing_1440, clothing_1440_x2] },
      ],
    },
    rating: 4,
    sub: SUB_DATA,
  },
  {
    name: 'electronics',
    title: 'Electronics',
    icon: TvIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 4,
    sub: SUB_DATA,
  },
  {
    name: 'beauty&health',
    title: 'Beauty and Health',
    icon: HeartIcon,
    image: {
      alt: 'hero image',
      src: beauty_health_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [beauty_health_375, beauty_health_375_x2] },
        { width: 1440, items: [beauty_health_1440, beauty_health_1440_x2] },
      ],
    },
    rating: 4,
    sub: SUB_DATA,
  },
  {
    name: 'children_products',
    title: "Children's Products",
    icon: BabyCarriageIcon,
    image: {
      alt: 'hero image',
      src: beauty_health_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [beauty_health_375, beauty_health_375_x2] },
        { width: 1440, items: [beauty_health_1440, beauty_health_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'sports&recreation',
    title: 'Sports and Recreation',
    icon: DumbbellIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'automotive_products',
    title: 'Automotive Products',
    icon: CarIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'books&stationery',
    title: 'Books and Stationery',
    icon: BookIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'food&groceries',
    title: 'Food and Groceries',
    icon: AppleIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'gifts&souvenirs',
    title: 'Gifts and Souvenirs',
    icon: GiftIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'pets&supplies',
    title: 'Pets and Pet Supplies',
    icon: PawIcon,
    image: {
      alt: 'hero image',
      src: pets_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [pets_375, pets_375_x2] },
        { width: 1440, items: [pets_1440, pets_1440_x2] },
      ],
    },
    rating: 4,
    sub: SUB_DATA,
  },
  {
    name: 'furniture&interior',
    title: 'Furniture and Interior',
    icon: CouchIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'construction&repair',
    title: 'Construction and Repair',
    icon: BrushIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'musical_instruments',
    title: 'Musical Instruments',
    icon: MusicIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'arts&crafts',
    title: 'Arts and Crafts',
    icon: PaintBrushIcon,
    image: {
      alt: 'hero image',
      src: arts_crafts_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [arts_crafts_375, arts_crafts_375_x2] },
        { width: 1440, items: [arts_crafts_1440, arts_crafts_1440_x2] },
      ],
    },
    rating: 4,
    sub: SUB_DATA,
  },
  {
    name: 'flowers&plants',
    title: 'Flowers and Plants',
    icon: FlowerTulipIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'games&entertainment',
    title: 'Games and Entertainment',
    icon: GamepadIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'photography_equipment',
    title: 'Photography Equipment',
    icon: CameraIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'office&business',
    title: 'Office and Business',
    icon: BuildingIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
  {
    name: 'home&garden',
    title: 'Home and Garden',
    icon: HomeIcon,
    image: {
      alt: 'hero image',
      src: home_garden_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [home_garden_375, home_garden_375_x2] },
        { width: 1440, items: [home_garden_1440, home_garden_1440_x2] },
      ],
    },
    rating: 4,
    sub: SUB_DATA,
  },
  {
    name: 'travel&tourism',
    title: 'Travel and Tourism',
    icon: PlaneIcon,
    image: {
      alt: 'hero image',
      src: electronics_375,
      type: 'image/png',
      srcset: [
        { width: 375, items: [electronics_375, electronics_375_x2] },
        { width: 1440, items: [electronics_1440, electronics_1440_x2] },
      ],
    },
    rating: 0,
    sub: SUB_DATA,
  },
]
