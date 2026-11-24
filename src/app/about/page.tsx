'use client';

import { useLanguage } from '@/lib/language';
import { companyInfo } from '@/data/products';
import Link from 'next/link';
import { FaDumbbell, FaHandshake, FaShieldHalved, FaHeartPulse, FaGlobe, FaCircleCheck, FaArrowRight, FaTruckFast, FaLock } from 'react-icons/fa6';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: FaShieldHalved,
      title: t('Quality First', '质量第一'),
      desc: t(
        'Every product is built with premium materials and rigorously tested to last for years of daily use.',
        '每件产品都采用优质材料，并经严格测试，可承受多年日常使用。'
      ),
    },
    {
      icon: FaHeartPulse,
      title: t('Customer Commitment', '客户至上'),
      desc: t(
        'We build long-term relationships through responsive service, transparent communication, and a 2-year warranty.',
        '我们通过响应迅速的服务、透明的沟通和 2 年质保，与客户建立长期关系。'
      ),
    },
    {
      icon: FaDumbbell,
      title: t('Fit for Home', '居家友好'),
      desc: t(
        'Compact, space-saving designs engineered to deliver real results without requiring a full gym.',
        '紧凑省空间的设计，无需完整健身房也能达到真实训练效果。'
      ),
    },
    {
      icon: FaTruckFast,
      title: t('Fast Delivery', '快速配送'),
      desc: t(
        'Reliable worldwide shipping with free delivery on orders over $50 and easy order tracking.',
        '可靠的全球配送，满 $50 免运费，并提供便捷的订单追踪。'
      ),
    },
  ];

  const timeline = [
    { year: '2021', title: t('Company Founded', '公司成立'), desc: t('HemelaFitHub launched with a vision to make high-quality home fitness accessible to everyone.', 'HemelaFitHub 成立，致力于让高品质居家健身惠及每个人。') },
    { year: '2022', title: t('Product Line Expansion', '产品线扩展'), desc: t('Expanded from resistance bands to a full range of strength and cardio equipment.', '从阻力带扩展到完整的力量与有氧器械产品线。') },
    { year: '2023', title: t('100K Units Sold', '销量破10万'), desc: t('Reached 100,000 units sold and earned thousands of five-star reviews.', '累计售出 10 万件，赢得数千条五星好评。') },
    { year: '2024', title: t('Secure Checkout Added', '上线安全结算'), desc: t('Introduced Stripe secure checkout with credit cards and digital wallets.', '上线 Stripe 安全结算，支持信用卡与数字钱包。') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('About HemelaFitHub', '关于 HemelaFitHub')}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            {t(
              'Designing compact, high-quality home fitness equipment for everyday strength.',
              '设计紧凑、高品质的居家健身器材，助力日常力量训练。'
            )}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                {t('Our Story', '我们的故事')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t(
                    'HemelaFitHub started with a simple belief: you should not need an expensive gym membership or a dedicated room full of equipment to get strong. We design compact, high-quality fitness gear that fits your home, your schedule, and your life.',
                    'HemelaFitHub 源于一个简单的信念：你不需要昂贵的健身房会员，也不需要满屋子的器械才能变强。我们设计紧凑、高品质的健身器材，契合你的家、你的时间与你的生活。'
                  )}
                </p>
                <p>
                  {t(
                    'Every product — from our adjustable dumbbells to our mini massage guns — is engineered with premium materials, tested for years of daily use, and backed by a 2-year warranty.',
                    '每一件产品——从可调节哑铃到迷你筋膜枪——都采用优质材料打造，经多年日常使用测试，并提供 2 年质保。'
                  )}
                </p>
                <p>
                  {t(
                    'Today, HemelaFitHub serves tens of thousands of customers worldwide, helping people build strength, improve mobility, and feel great — all from the comfort of home.',
                    '如今，HemelaFitHub 已服务全球数万名客户，帮助人们在家就能增强力量、改善灵活性、收获健康。'
                  )}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl flex items-center justify-center">
                <div className="text-center p-12">
                  <FaDumbbell className="text-8xl text-primary-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">{companyInfo.name}</h3>
                  <p className="text-primary-600">{t('Home Fitness, Elevated', '居家健身，更进一步')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('Our Values', '我们的价值观')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
                <v.icon className="text-4xl text-primary-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('Our Journey', '我们的历程')}</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-0`}>
                  <div className="md:w-1/2 md:pr-12 md:text-right flex-1">
                    <div className="md:hidden mb-2">
                      <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.year}</span>
                    </div>
                    <div className="hidden md:block">
                      <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.year}</span>
                      <h3 className="font-bold text-gray-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-600 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 border-4 border-white mt-1.5" />
                  <div className="md:w-1/2 md:pl-12 flex-1">
                    <div className="md:hidden">
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('Join the HemelaFitHub Community', '加入 HemelaFitHub 社区')}
          </h2>
          <p className="text-primary-100 mb-8">
            {t(
              'Join 50,000+ customers who trust us for their home fitness needs.',
              '加入信任我们满足居家健身需求的 50,000+ 用户。'
            )}
          </p>
          <Link href="/products" className="btn-white text-lg">
            {t('Shop Now', '立即选购')}
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
