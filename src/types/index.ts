export interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
}

export interface MenuCategory {
  title: string;
  icon: string;
}

export interface PromiseItem {
  label: string;
  iconName: 'clock' | 'sparkles' | 'award' | 'truck';
}