'use client';

import { useLanguage } from '@/lib/language';
import { useCart, formatPrice } from '@/lib/cart';
import Image from 'next/image';
import Link from 'next/link';
import { FaXmark, FaTrash, FaPlus, FaMinus, FaCartShopping, FaArrowRight, FaLock } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

const CartDrawer = () => {
  const { t, language } = useLanguage();
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState('');

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleCheckout = async () => {
    setCheckingOut(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({ id: i.product.id, quantity: i.quantity })),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || t('Checkout failed. Please try again.', '结算失败，请重试。'));
        setCheckingOut(false);
        return;
      }
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch {
      setError(t('Checkout failed. Please try again.', '结算失败，请重试。'));
      setCheckingOut(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] animate-fade-in"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <FaCartShopping className="text-primary-600" />
            {t('Your Cart', '购物车')}
            {totalItems > 0 && <span className="text-sm text-gray-400">({totalItems})</span>}
          </h2>
          <button onClick={closeCart} className="p-2 text-gray-500 hover:text-gray-900" aria-label="Close">
            <FaXmark className="text-xl" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaCartShopping className="text-3xl text-gray-300" />
            </div>
            <p className="text-gray-500 mb-4">{t('Your cart is empty.', '您的购物车是空的。')}</p>
            <Link href="/products" onClick={closeCart} className="btn-primary">
              {t('Start Shopping', '开始选购')}
              <FaArrowRight />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3 p-3 border border-gray-100 rounded-xl">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-50 shrink-0 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                        {product.name}
                      </h3>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-gray-400 hover:text-red-500 shrink-0"
                        aria-label="Remove"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{product.sku}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {formatPrice(product.price * quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-5 space-y-3">
              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-gray-600">{t('Subtotal', '小计')}</span>
                <span className="text-xl font-bold text-gray-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-gray-400">{t('Shipping & taxes calculated at checkout.', '运费与税费将在结算时计算。')}</p>
              <button
                onClick={handleCheckout}
                disabled={checkingOut}
                className="w-full btn-primary justify-center text-base disabled:opacity-60"
              >
                {checkingOut ? (
                  t('Processing...', '处理中...')
                ) : (
                  <>
                    <FaLock />
                    {t('Checkout Securely', '安全结算')}
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                <FaLock />
                {t('Powered by Stripe', '由 Stripe 提供支付')}
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
