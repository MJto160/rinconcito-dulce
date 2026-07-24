import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Aldea Santa Ana Antigua Guatemala',
      subContent: 'Antigua Guatemala, Sacatepéquez',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+502 1238-4567',
      subContent: 'WhatsApp disponible',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hola@dulcedelicia.com',
      subContent: 'Respuesta en 24h',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes - Sábado',
      subContent: '9:00 AM - 8:00 PM',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-warm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#fde68a]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e9b4a0]/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-[#d26a4d] text-sm font-medium mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2a1f18] mb-4">
            Hablemos de tu{' '}
            <span className="text-gradient">pedido especial</span>
          </h2>
          <p className="text-[#4a3728]/70 max-w-2xl mx-auto">
            ¿Tienes un evento especial? Nos encantaría ayudarte a crear el pastel perfecto para tu celebración. Contáctanos para una consulta personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-warm transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f9ebe5] flex items-center justify-center group-hover:bg-[#d26a4d] transition-colors">
                  <info.icon className="w-5 h-5 text-[#d26a4d] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a1f18]">{info.title}</h3>
                  <p className="text-[#4a3728]">{info.content}</p>
                  <p className="text-sm text-[#4a3728]/60">{info.subContent}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="font-semibold text-[#2a1f18] mb-3">Síguenos</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#d26a4d] flex items-center justify-center hover:bg-[#c55238] text-white transition-all hover:-translate-y-1 hover:shadow-warm"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-warm-lg p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-[#2a1f18] mb-6">
                Envíanos un mensaje
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4a3728] mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f4d4c7] focus:border-[#d26a4d] focus:ring-0 outline-none transition-colors bg-[#fdf9f3]/50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4a3728] mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#f4d4c7] focus:border-[#d26a4d] focus:ring-0 outline-none transition-colors bg-[#fdf9f3]/50"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-[#4a3728] mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f4d4c7] focus:border-[#d26a4d] focus:ring-0 outline-none transition-colors bg-[#fdf9f3]/50"
                  placeholder="+502 1238-4567"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#4a3728] mb-2">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#f4d4c7] focus:border-[#d26a4d] focus:ring-0 outline-none transition-colors bg-[#fdf9f3]/50 resize-none"
                  placeholder="Cuéntanos sobre tu evento o pedido especial..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#d26a4d] to-[#c55238] text-white font-semibold shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <span className="text-lg">✓</span> Mensaje enviado
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
