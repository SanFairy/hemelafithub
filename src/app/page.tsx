'use client';

import { useLanguage } from '@/lib/language';
import { companyInfo, products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import Image from 'next/image';
import { FaDumbbell, FaTruckFast, FaShieldHalved, FaHeartPulse, FaStar, FaCircleCheck, FaArrowRight, FaBoxOpen } from 'react-icons/fa6';

export default function HomePage() {
  const { t, language } = useLanguage();
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  const stats = [
    { icon: FaHeartPulse, value: '50K+', label: t('Happy Customers', '满意客户'), labelZh: '满意客户' },
    { icon: FaTruckFast, value: '40+', label: t('Countries Served', '服务国家'), labelZh: '服务国家' },
    { icon: FaShieldHalved, value: '2yr', label: t('Warranty', '质保年限'), labelZh: '质保年限' },
    { icon: FaStar, value: '4.8', label: t('Average Rating', '平均评分'), labelZh: '平均评分' },
  ];

  const advantages = [
    {
      title: t('Built for Home', '专为居家设计'),
      desc: t(
        'Compact, space-saving designs that deliver real gym-level results without cluttering your home.',
        '紧凑省空间的设计，无需占用家中空间也能达到健身房级别的训练效果。'
      ),
    },
    {
      title: t('Durable Quality', '经久耐用'),
      desc: t(
        'Premium materials and rigorous testing ensure every product stands up to daily use for years.',
        '优质材料与严格测试，确保每件产品在多年日常使用中依然坚固可靠。'
      ),
    },
    {
      title: t('Fast Free Shipping', '快速免运费'),
      desc: t(
        'Free shipping on orders over $50 with reliable worldwide delivery and easy tracking.',
        '订单满 $50 免运费，全球可靠配送，轻松追踪物流。'
      ),
    },
    {
      title: t('Secure Payments', '安全支付'),
      desc: t(
        'Pay securely with Stripe — credit cards, Apple Pay, Google Pay and more, all encrypted.',
        '通过 Stripe 安全支付，支持信用卡、Apple Pay、Google Pay 等多种方式，全程加密。'
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
                <FaDumbbell className="text-primary-300" />
                {t('Premium Home Fitness Equipment', '高端居家健身器材')}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {t(
                  'Build Strength at Home. Small Gear, Big Results.',
                  '在家练出力量。小巧器械，大成效。'
                )}
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg">
                {t(
                  'HemelaFitHub designs compact, high-quality fitness equipment that fits your lifestyle. From adjustable dumbbells to massage guns — everything you need to stay strong without a full gym.',
                  'HemelaFitHub 设计紧凑、高品质的健身器材，契合您的生活方式。从可调节哑铃到筋膜枪——无需完整健身房，也能保持强健。'
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-white">
                  {t('Shop Equipment', '选购器械')}
                  <FaArrowRight />
                </Link>
                <Link href="/about" className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  {t('Our Story', '品牌故事')}
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden animate-float relative">
                <Image
                  src="/images/company-hero.svg"
                  alt="HemelaFitHub Home Fitness Equipment"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow">
                <stat.icon className="text-3xl text-primary-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-64 md:h-96">
              <Image
                src="/images/company-about.svg"
                alt="HemelaFitHub Home Fitness"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mb-4">
                <FaDumbbell />
                {t('About HemelaFitHub', '关于 HemelaFitHub')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t(
                  'Fitness Gear Designed for Real Life',
                  '为真实生活而设计的健身器材'
                )}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === 'zh' ? companyInfo.descriptionZh : companyInfo.description}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  t('Compact, storage-friendly designs', '紧凑易收纳的设计'),
                  t('Premium materials built to last', '优质材料，经久耐用'),
                  t('2-year warranty on all products', '所有产品享 2 年质保'),
                  t('Dedicated customer support team', '专属客户支持团队'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <FaCircleCheck className="text-green-500 mt-1 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary">
                {t('Learn More', '了解更多')}
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                  <FaCircleCheck className="text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{adv.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('Featured Products', '精选产品')}
            </h2>
            <p className="section-subtitle mx-auto">
              {t(
                'Best-selling home fitness gear trusted by thousands of customers.',
                '广受数千用户信赖的热门居家健身器材。'
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">
              {t('View All Products', '查看全部产品')}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('Shop by Category', '按分类选购')}
            </h2>
            <p className="section-subtitle mx-auto">
              {t(
                'Everything you need for a complete home workout, organized by goal.',
                '按目标分类，打造完整居家训练所需的一切。'
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-2xl">
                  {cat.emoji}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {language === 'zh' ? cat.nameZh : cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FaBoxOpen className="text-5xl text-primary-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('Ready to Build Your Home Gym?', '准备好打造你的居家健身房了吗？')}
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            {t(
              'Shop our compact fitness gear today. Free shipping over $50 and secure checkout with Stripe.',
              '立即选购我们的紧凑健身器材。满 $50 免运费，Stripe 安全结算。'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-white text-lg">
              {t('Shop Now', '立即选购')}
            </Link>
            <Link href="/contact" className="border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all text-lg">
              {t('Contact Us', '联系我们')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
