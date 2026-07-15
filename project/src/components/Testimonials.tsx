import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fdf9f3] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#f9ebe5] text-[#d26a4d] text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#2a1f18] mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-gradient">clientes</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#fef3c7] rounded-full flex items-center justify-center opacity-60">
            <Quote className="w-10 h-10 text-[#d97706]" />
          </div>

          <div className="relative bg-white rounded-3xl shadow-warm-lg p-8 sm:p-12 min-h-[300px] flex flex-col justify-center">
            <div className="flex items-center gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < current.rating
                      ? 'text-[#f59e0b] fill-[#f59e0b]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl text-[#4a3728] text-center mb-8 leading-relaxed font-serif italic">
              "{current.comment}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <img
                src={current.avatar_url}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-[#f9ebe5]"
              />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-[#2a1f18] text-lg">{current.name}</p>
                <p className="text-[#d26a4d]">Cliente verificado</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-white shadow-warm hover:shadow-warm-lg text-[#4a3728] hover:text-[#d26a4d] transition-all hover:-translate-y-1"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#d26a4d] w-8'
                      : 'bg-[#f4d4c7] hover:bg-[#e9b4a0]'
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white shadow-warm hover:shadow-warm-lg text-[#4a3728] hover:text-[#d26a4d] transition-all hover:-translate-y-1"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
