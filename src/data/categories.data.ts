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
}

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
  },
]
