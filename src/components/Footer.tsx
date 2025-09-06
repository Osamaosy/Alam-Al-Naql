import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <img 
                src="/images/image.png" 
                alt="شركة عالم النقل - لوجو" 
                className="w-10 h-10 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-bold">عالم النقل</h3>
                <p className="text-gray-400 text-sm">لخدمات نقل الأثاث</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              شركة عالم النقل - شريكك الموثوق في نقل الأثاث والعفش بالرياض. نقدم تخزين آمن وخدمات فك وتركيب احترافية بأعلى معايير الجودة والأمان.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-blue-400 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">من نحن</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">خدماتنا</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors">أعمالنا</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-400">خدمة العملاء:</div>
                  <a href="tel:+966595107071" className="text-gray-300 hover:text-blue-400 transition-colors">059-510-7071</a>
                  <br />
                  <div className="text-sm text-orange-400 mt-2">الشكاوي:</div>
                  <a href="tel:0546446013" className="text-gray-300 hover:text-orange-400 transition-colors">054-644-6013</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:alamelnagl@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  alamelnagl@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">الرياض، السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          {/* Copyright and Dev Info */}
          <p className="text-gray-400 mb-2">
            © 2025 عالم النقل. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-sm">
            تصميم وتطوير بواسطة 
            <a href="https://www.linkedin.com/in/osama-rezk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mx-1">أسامة إبراهيم رزق</a>
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse mt-2">
            <a href="https://github.com/Osamaosy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/osama-rezk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://wa.me/201277122289" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;