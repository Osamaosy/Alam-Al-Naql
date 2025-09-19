import { Shield, Zap, Users, Target, Wrench, Wind, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "🏪 تخزين آمن ومحمي",
      description: "مستودعات تخزين آمن مجهزة بأحدث أنظمة الحماية والمراقبة على مدار الساعة لحفظ الأثاث والعفش بأمان تام",
      features: ["مراقبة 24/7", "تأمين شامل", "بيئة مناسبة"]
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "⚡ نقل أثاث سريع وآمن",
      description: "خدمة نقل أثاث بالرياض سريعة وفعالة مع ضمان الوصول في الوقت المحدد واستخدام أحدث المعدات",
      features: ["سرعة في التنفيذ", "دقة في المواعيد", "معدات حديثة"]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "👷 عمالة احترافية مدربة",
      description: "فريق عمل مدرب ومتخصص في نقل العفش والأثاث بالرياض مع خبرة واسعة وتدريب مستمر",
      features: ["خبرة عالية", "تدريب مستمر", "احترافية تامة"]
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "🎯 دقة واهتمام بالتفاصيل",
      description: "عناية فائقة ودقة عالية في نقل الأثاث والتعامل مع ممتلكاتك الثمينة كأنها ملكنا",
      features: ["عناية فائقة", "حماية كاملة", "اهتمام بالتفاصيل"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "🔧 فك وتركيب احترافي",
      description: "خدمة فك وتركيب الأثاث والعفش بطريقة احترافية وآمنة مع ضمان السلامة والجودة",
      features: ["فنيون متخصصون", "أدوات احترافية", "ضمان الجودة"]
    },
    {
      icon: <Wind className="w-12 h-12 text-blue-600" />,
      title: "❄️ فك وتركيب المكيفات",
      description: "خدمة فك وتركيب أجهزة التكييف بواسطة فنيين متخصصين مع ضمان الجودة والصيانة",
      features: ["فنيون معتمدون", "ضمان الصيانة", "خدمة شاملة"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-6">
            🛠️ خدماتنا المتميزة
          </div>
          <h2 className="gradient-text mb-6">خدمات نقل الأثاث والعفش الشاملة</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="lead-text max-w-4xl mx-auto">
            🌟 نقدم مجموعة شاملة ومتكاملة من خدمات نقل الأثاث والعفش بالرياض مع تخزين آمن وخدمات فك وتركيب متخصصة لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
            >
              <div className="text-center space-y-6">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                
                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2 space-x-reverse text-sm text-blue-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-6">🚚</div>
              <h4 className="text-3xl font-bold mb-6">هل تحتاج لخدمات نقل الأثاث؟</h4>
              <p className="text-xl mb-8 text-white font-medium max-w-3xl mx-auto">
                📞 اتصل بشركة عالم النقل الآن للحصول على <strong>استشارة مجانية</strong> وعرض سعر مخصص لنقل العفش والأثاث مع تخزين آمن
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+966595107071"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Phone className="w-6 h-6" />
                  <span>📞 0595107071</span>
                </a>
                
                <a
                  href="https://wa.me/+966595107071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>💬 واتساب فوري</span>
                </a>
                
                <a
                  href="tel:0546446013"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Phone className="w-6 h-6" />
                  <span>📞 الشكاوي: 0546446013</span>
                </a>
              </div>
              
              {/* Additional Info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-2xl font-bold">⚡</div>
                  <div className="text-sm font-semibold">استجابة فورية</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-2xl font-bold">💰</div>
                  <div className="text-sm font-semibold">أسعار منافسة</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-2xl font-bold">🛡️</div>
                  <div className="text-sm font-semibold">ضمان شامل</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;