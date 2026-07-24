import { Heart, Leaf, Sparkles, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Hecho con Amor',
      description: 'Cada creación es elaborada con dedicación y pasión por el arte de la repostería.',
      color: 'bg-[#f4d4c7]',
    },
    {
      icon: Leaf,
      title: 'Ingredientes Premium',
      description: 'Utilizamos solo los mejores ingredientes naturales y orgánicos disponibles.',
      color: 'bg-[#d4edda]',
    },
    {
      icon: Sparkles,
      title: 'Creatividad Sin Límites',
      description: 'Diseños únicos y personalizados que transforman tus sueños en realidad.',
      color: 'bg-[#fef3c7]',
    },
    {
      icon: Clock,
      title: 'Frescura Garantizada',
      description: 'Todo hecho el mismo día de tu pedido para asegurar la máxima frescura.',
      color: 'bg-[#e0e7ff]',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-warm relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#fde68a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#e9b4a0]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-[#d26a4d] text-sm font-medium mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2a1f18] mb-6">
              Tradición y{' '}
              <span className="text-gradient">Pasión</span>{' '}
              en cada creación
            </h2>
            <p className="text-[#4a3728]/80 text-lg mb-6 leading-relaxed">
              En <strong className="text-[#d26a4d]">Rinconcito Dulce</strong>, cada postre cuenta una historia.
              Comenzamos en 2026 con el sueño de una abuela apasionada por la repostería tradicional,
              y hoy seguimos su legado con la misma dedicación y cariño.
            </p>
            <p className="text-[#4a3728]/70 mb-8 leading-relaxed">
              Nuestro equipo de pasteleros artesanos combina técnicas tradicionales
              con innovación moderna para crear experiencias únicas que deleitan
              todos los sentidos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-warm transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-[#4a3728]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2a1f18] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#4a3728]/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
