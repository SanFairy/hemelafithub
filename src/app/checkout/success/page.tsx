'use client';

import { useLanguage } from '@/lib/language';
import { useCart } from '@/lib/cart';
import Link from 'next/link';
import { FaCircleCheck, FaArrowRight } from 'react-icons/fa6';
import { useEffect } from 'react';

export default function CheckoutSuccessPage() {
  const { t } = useLanguage();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaCircleCheck className="text-green-600 text-4xl" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t('Payment Successful!', '支付成功！')}
      </h1>
      <p className="text-gray-600 mb-8">
        {t(
          'Thank you for your order. A confirmation email is on its way. Your fitness gear will be shipped shortly.',
          '感谢您的下单。确认邮件即将发送。您的健身器材将很快发货。'
        )}
      </p>
      <Link href="/products" className="btn-primary">
        {t('Continue Shopping', '继续购物')}
        <FaArrowRight />
      </Link>
    </div>
  );
}
