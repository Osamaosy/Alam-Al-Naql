import { Shield, Zap, Users, Target, Wrench, Wind, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "تخزين آمن للأثاث",
      description: "مستودعات تخزين آمن مجهزة بأحدث أنظمة الحماية والمراقبة لحفظ الأثاث والعفش"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "نقل أثاث سريع",
      description: "خدمة نقل أثاث بالرياض سريعة وفعالة مع ضمان الوصول في الوقت المحدد"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "عمالة احترافية لنقل العفش",
      description: "فريق عمل مدرب ومتخصص في نقل العفش والأثاث بالرياض مع خبرة واسعة"
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "دقة في نقل الأثاث",
      description: "عناية فائقة ودقة عالية في نقل الأثاث والتعامل مع ممتلكاتك الثمينة"
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "فك وتركيب الأثاث والعفش",
      description: "خدمة فك وتركيب الأثاث والعفش بطريقة احترافية وآمنة مع ضمان السلامة"
    },
    {
      icon: <Wind className="w-12 h-12 text-blue-600" />,
      title: "فك وتركيب المكيفات",
      description: "خدمة فك وتركيب أجهزة التكييف بواسطة فنيين متخصصين مع ضمان الجودة"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">خدمات نقل الأثاث والعفش</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات نقل الأثاث والعفش بالرياض مع تخزين آمن وخدمات فك وتركيب متخصصة لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold mb-4">هل تحتاج لخدمات نقل الأثاث؟</h4>
            <p className="text-lg mb-6">اتصل بشركة عالم النقل الآن للحصول على استشارة مجانية وعرض سعر مخصص لنقل العفش والأثاث مع تخزين آمن</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966595107071"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Phone className="w-5 h-5" />
                <span>0595107071</span>
              </a>
              
              <a
                href="https://wa.me/+966595107071"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 space-x-reverse border-2 border-green-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>واتساب</span>
              </a>
              
              <a
                href="tel:0546446013"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 space-x-reverse border-2 border-orange-200"
              >
                <Phone className="w-5 h-5" />
                <span>الشكاوي: 0546446013</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;