'use client';

import { useLanguage } from '@/lib/language';
import { useCart, formatPrice } from '@/lib/cart';
import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaCartPlus } from 'react-icons/fa6';
import { useState } from 'react';

const ProductCard = ({ product: p }: { product: typeof products[0] }) => {
  const { t, language } = useLanguage();
  const { addItem } = useCart();
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col">
      <Link href={`/products/${p.id}`} className="block">
        <div className="h-56 bg-white flex items-center justify-center relative overflow-hidden p-3">
          {imgError ? (
            <span className="text-6xl opacity-30">🏋️</span>
          ) : (
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImgError(true)}
            />
          )}
          {p.featured && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
              {t('Featured', '精选')}
            </span>
          )}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1.5">
          <FaStar className="text-yellow-400 text-xs" />
          <span className="text-xs font-semibold text-gray-700">{p.rating}</span>
          <span className="text-xs text-gray-400">({p.reviews.toLocaleString()})</span>
        </div>
        <Link href={`/products/${p.id}`}>
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-700 transition-colors line-clamp-2">
            {p.name}
          </h3>
        </Link>
        <div className="flex items-baseline gap-2 mt-auto pt-2">
          <span className="text-lg font-bold text-gray-900">{formatPrice(p.price)}</span>
        </div>
        <button
          onClick={() => addItem(p)}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-700 transition-colors"
        >
          <FaCartPlus />
          {t('Add to Cart', '加入购物车')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
