import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#productos', label: 'Productos' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-warm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
  src={`${import.meta.env.BASE_URL}images/logotipo_sin_fondo.png`}
  alt="Logotipo Rinconcito Dulce" 
  className="w-12 h-12 object-contain" 
/>

            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-[#2a1f18]">
                Rinconcito Dulce
              </h1>
              <p className="text-xs text-[#d26a4d] -mt-1">Repostería Artesanal</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[#4a3728] hover:text-[#d26a4d] font-medium transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d26a4d] to-[#f59e0b] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-[#f9ebe5] transition-colors group"
              aria-label="Carrito de compras"
            >
              <ShoppingBag className="w-6 h-6 text-[#4a3728] group-hover:text-[#d26a4d] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#d26a4d] text-white text-xs font-bold flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#f9ebe5] transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#4a3728]" />
              ) : (
                <Menu className="w-6 h-6 text-[#4a3728]" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-[#4a3728] hover:text-[#d26a4d] hover:bg-[#f9ebe5] transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
