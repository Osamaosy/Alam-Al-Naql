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