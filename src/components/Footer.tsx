import { Phone, Mail, MapPin, Github, Linkedin, MessageCircle, Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <img 
                  src="/images/image.webp" 
                  alt="شركة عالم النقل - لوجو" 
                  className="w-12 h-12 object-contain bg-white rounded-xl p-2 shadow-lg"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  عالم النقل
                </h3>
                <p className="text-gray-400 text-sm">لخدمات نقل الأثاث</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              شركة عالم النقل - شريكك الموثوق في نقل الأثاث والعفش بالرياض. نقدم تخزين آمن وخدمات فك وتركيب احترافية بأعلى معايير الجودة والأمان.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center space-x-2 space-x-reverse">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span>روابط سريعة</span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#hero", text: "الرئيسية" },
                { href: "#about", text: "من نحن" },
                { href: "#services", text: "خدماتنا" },
                { href: "#gallery", text: "أعمالنا" },
                { href: "#contact", text: "اتصل بنا" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">←</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">خدمة العملاء:</div>
                  <a href="tel:+966595107071" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                    059-510-7071
                  </a>
                  <div className="text-sm text-orange-400 mt-3 mb-1">الشكاوي:</div>
                  <a href="tel:0546446013" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                    054-644-6013
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:alamelnagl@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  alamelnagl@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">الرياض، السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-16 pt-8">
          {/* Enhanced Developer Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-3 space-x-reverse mb-4">
                <Code className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-semibold text-gray-200">تصميم وتطوير بواسطة</span>
                <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              </div>
              
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                أسامة إبراهيم رزق
              </h4>
              
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                مطور full-stack متخصص في تطوير المواقع والتطبيقات الحديثة
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 space-x-reverse">
                <a 
                  href="https://github.com/Osamaosy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-3 rounded-xl bg-gray-800 border border-gray-600 hover:border-gray-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    GitHub
                  </span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/osama-rezk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-3 rounded-xl bg-blue-600 border border-blue-500 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
                >
                  <Linkedin className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    LinkedIn
                  </span>
                </a>
                
                <a 
                  href="https://wa.me/201277122289" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-3 rounded-xl bg-green-600 border border-green-500 hover:border-green-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
                >
                  <MessageCircle className="w-6 h-6 text-white group-hover:text-green-100 transition-colors" />
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 mb-2 flex items-center justify-center space-x-2 space-x-reverse">
              <span>© 2025 عالم النقل. جميع الحقوق محفوظة.</span>
              <Heart className="w-4 h-4 text-red-400" />
            </p>
            <div className="flex justify-center items-center space-x-2 space-x-reverse text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>موقع محسن ومطور بأحدث التقنيات</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;