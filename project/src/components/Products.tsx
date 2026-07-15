import { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import type { Product } from '../types';

interface ProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const categories = ['Todos', 'Pasteles', 'Cupcakes', 'Galletas', 'Postres', 'Croissants'];

const categoryIcons: Record<string, string> = {
  'Todos': '✨',
  'Pasteles': '🎂',
  'Cupcakes': '🧁',
  'Galletas': '🍪',
  'Postres': '🍰',
  'Croissants': '🥐',
};

export default function Products({ products, onAddToCart }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="productos" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fbf3e7] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#f9ebe5] text-[#d26a4d] text-sm font-medium mb-4">
            Nuestra Colección
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2a1f18] mb-4">
            Delicias Artesanales
          </h2>
          <p className="text-[#4a3728]/70 max-w-2xl mx-auto">
            Cada creación está elaborada con ingredientes premium y el amor que nos caracteriza.
            Descubre nuestra selección de postres para cada ocasión.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#d26a4d] text-white shadow-warm'
                  : 'bg-[#fdf9f3] text-[#4a3728] hover:bg-[#f9ebe5]'
              }`}
            >
              <span>{categoryIcons[category]}</span>
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`} />

                <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={(e) => toggleFavorite(product.id, e)}
                    className={`p-3 rounded-full bg-white/90 backdrop-blur-sm transition-transform hover:scale-110 ${
                      favorites.has(product.id) ? 'text-red-500' : 'text-[#4a3728] hover:text-red-500'
                    }`}
                    aria-label={favorites.has(product.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                  >
                    <Heart className={`w-5 h-5 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-[#4a3728] hover:text-[#d26a4d] transition-transform hover:scale-110"
                    aria-label="Vista rápida"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {product.featured && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#f59e0b] text-white text-xs font-semibold">
                    Popular
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif font-semibold text-lg text-[#2a1f18] group-hover:text-[#d26a4d] transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-[#d26a4d]">
                    Q{product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-[#4a3728]/70 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#fdf9f3] text-[#d26a4d] font-medium hover:bg-[#d26a4d] hover:text-white transition-all duration-300 group/btn"
                >
                  <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce" />
                  Añadir al carrito
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">🧁</span>
            <p className="text-[#4a3728]/70">
              No hay productos en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
