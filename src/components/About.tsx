import { Users, Award, Shield, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "👥 فريق محترف ومدرب",
      description: "عمالة متخصصة وذات خبرة واسعة في نقل الأثاث بأمان تام",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "🏆 جودة عالية مضمونة",
      description: "خدمات نقل عفش بأعلى معايير الجودة والاحترافية",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "🛡️ أمان وحماية شاملة",
      description: "حماية كاملة لممتلكاتك مع تأمين شامل ضد الأضرار",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "⚡ سرعة ودقة في التنفيذ",
      description: "التزام تام بالمواعيد المحددة مع سرعة في الإنجاز",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-gray-50 bg-pattern"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-6">
            🏢 تعرف على شركة عالم النقل
          </div>
          <h2 className="gradient-text mb-6">
            من نحن - شركة نقل أثاث رائدة بالرياض
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="lead-text max-w-4xl mx-auto">
            🌟 نحن الخيار الأول والأمثل لخدمات نقل الأثاث والعفش في الرياض
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
                🚚 شركة عالم النقل - رائدة في مجال نقل الأثاث والعفش بالرياض
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                🏆 <strong>شركة عالم النقل</strong> هي أفضل شركة نقل عفش وأثاث
                بالرياض، متخصصة في تقديم خدمات نقل احترافية مع{" "}
                <strong>تخزين آمن</strong> وخدمات{" "}
                <strong>فك وتركيب متخصصة</strong>. نحن نفخر بفريقنا المحترف
                والمتخصص في نقل أثاث بالرياض الذي يتعامل مع جميع أنواع الأثاث
                والممتلكات بعناية فائقة ودقة عالية.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                ✨ كشركة نقل عفش رائدة بالرياض، نسعى دائماً لتقديم أفضل خدمات
                نقل الأثاث لعملائنا الكرام من خلال استخدام أحدث المعدات
                والتقنيات، مع توفير <strong>تخزين آمن</strong> وخدمات{" "}
                <strong>فك وتركيب متخصصة</strong>، والالتزام بأعلى معايير الأمان
                والجودة.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-4 rounded-2xl text-center shadow-lg interactive-hover">
                <div className="text-3xl font-bold text-blue-800 mb-1">+10</div>
                <div className="text-blue-700 font-semibold text-sm">
                  سنوات خبرة
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 px-6 py-4 rounded-2xl text-center shadow-lg interactive-hover">
                <div className="text-3xl font-bold text-green-800 mb-1">
                  +1000
                </div>
                <div className="text-green-700 font-semibold text-sm">
                  عميل راضي
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 px-6 py-4 rounded-2xl text-center shadow-lg interactive-hover col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-purple-800 mb-1">
                  24/7
                </div>
                <div className="text-purple-700 font-semibold text-sm">
                  خدمة مستمرة
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="service-card text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                🌟 لماذا تختار شركة عالم النقل؟
              </h3>
              <p className="text-xl text-white font-medium">
                نحن نقدم أكثر من مجرد خدمة نقل - نقدم راحة البال
              </p>{" "}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-2">دقة في العمل</h4>
                <p className="text-white font-medium">
                  نهتم بأدق التفاصيل في كل عملية نقل
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-xl font-bold mb-2">جودة استثنائية</h4>
                <p className="text-white font-medium">
                  معايير عالية في جميع خدماتنا
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-bold mb-2">ثقة العملاء</h4>
                <p className="text-white font-medium">
                  سمعة طيبة وثقة متبادلة مع عملائنا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
