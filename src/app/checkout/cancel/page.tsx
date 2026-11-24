'use client';

import { useLanguage } from '@/lib/language';
import Link from 'next/link';
import { FaCircleXmark, FaArrowRight } from 'react-icons/fa6';

export default function CheckoutCancelPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaCircleXmark className="text-red-600 text-4xl" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t('Payment Cancelled', '支付已取消')}
      </h1>
      <p className="text-gray-600 mb-8">
        {t(
          'Your payment was not completed. Your cart is still saved — feel free to try again.',
          '您的支付未完成。购物车内容已为您保留，可随时重试。'
        )}
      </p>
      <Link href="/products" className="btn-primary">
        {t('Return to Shop', '返回商店')}
        <FaArrowRight />
      </Link>
    </div>
  );
}
