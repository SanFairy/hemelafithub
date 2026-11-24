'use client';

import { useLanguage } from '@/lib/language';
import { companyInfo } from '@/data/products';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLocationDot, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                HFH
              </div>
              <div>
                <h3 className="text-white font-bold">{companyInfo.name}</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {t(
                'Compact, high-quality home fitness equipment. Everything you need to stay strong without a full gym.',
                '紧凑、高品质的居家健身器材。无需完整健身房，也能保持强健。'
              )}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaFacebook className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaTiktok className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('Quick Links', '快速链接')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">{t('Home', '首页')}</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">{t('About Us', '关于我们')}</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">{t('Shop', '商店')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">{t('Contact', '联系我们')}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('Categories', '产品分类')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=strength" className="hover:text-primary-400 transition-colors">{t('Strength Training', '力量训练')}</Link></li>
              <li><Link href="/products?category=cardio" className="hover:text-primary-400 transition-colors">{t('Cardio & Endurance', '有氧耐力')}</Link></li>
              <li><Link href="/products?category=stretch" className="hover:text-primary-400 transition-colors">{t('Yoga & Flexibility', '瑜伽拉伸')}</Link></li>
              <li><Link href="/products?category=core" className="hover:text-primary-400 transition-colors">{t('Core & Balance', '核心平衡')}</Link></li>
              <li><Link href="/products?category=recovery" className="hover:text-primary-400 transition-colors">{t('Recovery & Massage', '放松恢复')}</Link></li>
              <li><Link href="/products?category=grips" className="hover:text-primary-400 transition-colors">{t('Hand & Grip', '手部握力')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('Contact Us', '联系我们')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-primary-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaPhone className="mt-1 text-primary-400 shrink-0" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaWhatsapp className="mt-1 text-primary-400 shrink-0" />
                <span>{companyInfo.whatsapp}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaLocationDot className="mt-1 text-primary-400 shrink-0" />
                <span>{t(companyInfo.address, companyInfo.addressZh)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. {t('All rights reserved.', '版权所有。')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
