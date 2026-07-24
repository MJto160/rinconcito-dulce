export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  featured: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar_url: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
