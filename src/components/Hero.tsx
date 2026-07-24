import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#fde68a]/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#f4d4c7]/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/3 w-80 h-80 bg-[#e9b4a0]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#f4d4c7] mb-6 animate-fade-in-up">
              <Star className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
              <span className="text-sm font-medium text-[#4a3728]">
                Premios a la Excelencia 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#2a1f18] leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Dulzura en cada{' '}
              <span className="text-gradient">bocado</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4a3728]/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Descubre el arte de la repostería artesanal. Cada creación está hecha con amor,
              ingredientes premium y recetas tradicionales perfeccionadas por generaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <a
                href="#productos"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#d26a4d] to-[#c55238] text-white font-semibold shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">Ver Productos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#c55238] to-[#a3412d] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contacto"
                className="group px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm border-2 border-[#d26a4d] text-[#d26a4d] font-semibold hover:bg-[#d26a4d] hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                Hacer Pedido
              </a>
            </div>

            <div className="flex justify-center lg:justify-start max-w-md mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-sm text-[#4a3728]/70">4.9+ Reseñas</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f9ebe5] via-[#fde68a]/30 to-[#e9b4a0]/40 animate-pulse" style={{ animationDuration: '4s' }} />

              <img
                src="/images/taartaleta_de_frutas.jpg"
                alt="Pastel artesanal decorado"
                className="relative w-full h-full object-cover rounded-3xl shadow-warm-lg"
              />

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-warm-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center">
                    <span className="text-2xl">🎂</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2a1f18]">Pasteles Premium</p>
                    <p className="text-sm text-[#d26a4d]">Desde Q349</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-warm-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#f4d4c7] flex items-center justify-center">
                    <span className="text-2xl">🧁</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2a1f18]">Cupcakes</p>
                    <p className="text-sm text-[#d26a4d]">6 por Q140</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
