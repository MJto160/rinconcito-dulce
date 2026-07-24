import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { supabase } from './hooks/useSupabase';
import type { Product, Testimonial, CartItem } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, testimonialsRes] = await Promise.all([
          supabase.from('products').select('*').order('created_at', { ascending: false }),
          supabase.from('testimonials').select('*').order('created_at', { ascending: false }),
        ]);

        if (productsRes.data) {
          console.log('PRODUCTOS SUPABASE:', productsRes.data);
  const fixedProducts = productsRes.data.map((product) => {
    const imageFixes: Record<string, string> = {
      'Cupcakes Red Velvet': `${import.meta.env.BASE_URL}images/cupcakes_red_velvet.jpg`,
      'Tiramisú Clásico': `${import.meta.env.BASE_URL}images/tiramisu_clasico.jpg`,
      'Pastel de Zanahoria': `${import.meta.env.BASE_URL}images/pastel_zanahoria.jpg`,
      'Cheesecake de Frutos Rojos': `${import.meta.env.BASE_URL}images/cheesecake_frutos_rojos.jpg`,
    };

    return {
      ...product,
      image_url: imageFixes[product.name] || product.image_url,
    };
  });

  setProducts(fixedProducts);
}
        if (testimonialsRes.data) setTestimonials(testimonialsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Products products={products} onAddToCart={handleAddToCart} />
        <About />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
