import { MapPin, Phone, Mail, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#productos', label: 'Productos' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const categories = [
    { href: '#productos', label: 'Pasteles' },
    { href: '#productos', label: 'Cupcakes' },
    { href: '#productos', label: 'Galletas' },
    { href: '#productos', label: 'Postres' },
    { href: '#productos', label: 'Croissants' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/rinconcitodulce.gt_?igsh=MWMybnNlZWppM2wwZA==', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#2a1f18] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d26a4d] via-[#f59e0b] to-[#d26a4d]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
                <img 
                src="/images/logotipo sin fondo.png" 
                alt="Logotipo Rinconcito Dulce" 
                className="w-12 h-12 object-contain" 
/>
              <div>
                <h3 className="text-xl font-serif font-bold">Rinconcito Dulce</h3>
                <p className="text-sm text-white/60">Repostería Artesanal</p>
              </div>
            </a>
            <p className="text-white/70 mb-6 leading-relaxed">
              Creando momentos dulces desde 2026. Cada uno de nuestros postres
              está elaborado con amor y los mejores ingredientes.
            </p>
                    <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d26a4d] transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Categorías</h4>
            <ul className="space-y-3">
              {categories.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#f59e0b] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d26a4d] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Aldea Santa Ana<br />
                  Antigua Guatemala, Sacatepéquez
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d26a4d] flex-shrink-0" />
                <span className="text-white/70">+502 1238-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d26a4d] flex-shrink-0" />
                <span className="text-white/70">hola@dulcedelicia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Rinconcito Dulce. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-[#d26a4d] fill-[#d26a4d]" /> para endulzar tu día
          </p>
        </div>
      </div>
    </footer>
  );
}
