'use client';

import { useLanguage } from '@/lib/language';
import { useCart, formatPrice } from '@/lib/cart';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCircleCheck, FaStar, FaCartPlus, FaBox, FaWeightScale, FaRuler, FaTag } from 'react-icons/fa6';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductDetailPage() {
  const { t, language } = useLanguage();
  const { addItem } = useCart();
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t('Product Not Found', '产品未找到')}
        </h1>
        <Link href="/products" className="btn-primary inline-flex">
          <FaArrowLeft />
          {t('Back to Shop', '返回商店')}
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">{t('Home', '首页')}</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary-600">{t('Shop', '商店')}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-white rounded-3xl flex items-center justify-center aspect-square relative overflow-hidden p-6 border border-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.featured && (
                <span className="absolute top-6 left-6 bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded-full z-10">
                  {t('Featured Product', '精选产品')}
                </span>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  {product.rating} · {product.reviews.toLocaleString()} {t('reviews', '条评价')}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary-700">{formatPrice(product.price)}</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'zh' ? product.descriptionZh : product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">{t('Key Features', '产品亮点')}</h3>
                <ul className="space-y-2">
                  {(language === 'zh' ? product.featuresZh : product.features).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <FaCircleCheck className="text-primary-500 mt-1 shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaTag className="text-xs" />
                    <span className="text-xs font-semibold uppercase">{t('SKU', 'SKU')}</span>
                  </div>
                  <p className="text-sm font-mono text-gray-900">{product.sku}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaBox className="text-xs" />
                    <span className="text-xs font-semibold uppercase">{t('Material', '材质')}</span>
                  </div>
                  <p className="text-sm text-gray-900">{product.material}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaWeightScale className="text-xs" />
                    <span className="text-xs font-semibold uppercase">{t('Weight', '重量')}</span>
                  </div>
                  <p className="text-sm text-gray-900">{product.weight}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-primary-600 mb-1">
                    <FaRuler className="text-xs" />
                    <span className="text-xs font-semibold uppercase">{t('Dimensions', '尺寸')}</span>
                  </div>
                  <p className="text-sm text-gray-900">{product.dimensions}</p>
                </div>
              </div>

              {/* Add to cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="px-4 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addItem(product, quantity)}
                  className="flex-1 btn-primary justify-center text-base"
                >
                  <FaCartPlus />
                  {t('Add to Cart', '加入购物车')}
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {t('Related Products', '相关产品')}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/products/${rp.id}`}
                    className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                      <Image src={rp.image} alt={rp.name} width={48} height={48} className="object-contain" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {rp.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary-700">{formatPrice(rp.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
