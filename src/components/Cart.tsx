import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-fade-in-up">
        <div className="flex items-center justify-between p-6 border-b border-[#f4d4c7]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-[#d26a4d]" />
            <h2 className="text-xl font-serif font-bold text-[#2a1f18]">
              Tu Carrito
            </h2>
            {totalItems > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-[#d26a4d] text-white text-sm font-medium">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#f9ebe5] transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5 text-[#4a3728]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-[#fdf9f3] flex items-center justify-center mb-4">
                <ShoppingBag className="w-12 h-12 text-[#d26a4d]/40" />
              </div>
              <p className="text-[#4a3728] font-medium mb-2">Tu carrito está vacío</p>
              <p className="text-[#4a3728]/60 text-sm">
                ¡Agrega algunos productos deliciosos!
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-3 rounded-full bg-[#d26a4d] text-white font-medium hover:bg-[#c55238] transition-colors"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-xl bg-[#fdf9f3] group"
                >
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#2a1f18] truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-[#d26a4d] font-medium">
                      Q{item.product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-white border border-[#f4d4c7] flex items-center justify-center hover:border-[#d26a4d] transition-colors"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="w-3 h-3 text-[#4a3728]" />
                      </button>
                      <span className="font-medium text-[#4a3728]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-white border border-[#f4d4c7] flex items-center justify-center hover:border-[#d26a4d] transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3 h-3 text-[#4a3728]" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="p-2 rounded-full hover:bg-red-50 text-[#4a3728]/50 hover:text-red-500 transition-colors self-start"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-[#f4d4c7] bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#4a3728]">Subtotal</span>
              <span className="font-semibold text-[#2a1f18]">Q{total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#4a3728] font-medium">Total</span>
              <span className="text-xl font-bold text-[#d26a4d]">Q{total.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d26a4d] to-[#c55238] text-white font-semibold shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1">
              Proceder al pago
            </button>
            <p className="text-center text-xs text-[#4a3728]/60 mt-4">
              Envío gratis en pedidos mayores a Q387
            </p>
          </div>
        )}
      </div>
    </>
  );
}
