export interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
}

export interface MenuCategory {
  title: string;
}

export interface PromiseItem {
  label: string;
}

export const NAV_LINKS = [
  'Cakes',
  'Theme Cakes',
  'Desserts',
  'Birthday',
  'Hampers',
  'Anniversary',
  'Occasions',
  'Occasions',
];

export const MENU_CATEGORIES: MenuCategory[] = [
  { title: 'CLASSIC' },
  { title: 'GOURMET' },
  { title: 'DESSERTS' },
  { title: 'COOKIES' },
];

export const BESTSELLERS: Product[] = [
  {
    id: '1',
    name: 'Rich Chocolate Truffle Cake',
    price: '₹500',
    rating: 5.0,
    image: '/images/bestsellers/choco-truffle.jpg',
  },
  {
    id: '2',
    name: 'Choco Chip Truffle Cake',
    price: '₹509',
    rating: 5.0,
    image: '/images/bestsellers/choco-chip.jpg',
  },
  {
    id: '3',
    name: 'Tropical Fruit N Almond Cake',
    price: '₹599',
    rating: 5.0,
    image: '/images/bestsellers/tropical-almond.jpg',
  },
  {
    id: '4',
    name: 'Rich Butterscotch Crunch Cake',
    price: '₹399',
    rating: 5.0,
    image: '/images/bestsellers/butterscotch.jpg',
  },
];

export const OUR_PROMISES: PromiseItem[] = [
  { label: 'ON TIME DELIVERY' },
  { label: '5000+ DESIGNS' },
  { label: '2 CR+ ORDERS' },
  { label: 'BAKED FRESH' },
];