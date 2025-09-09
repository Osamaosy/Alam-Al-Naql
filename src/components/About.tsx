import { Users, Award, Shield, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "فريق محترف",
      description: "عمالة مدربة وذات خبرة عالية"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "جودة عالية",
      description: "خدمات بأعلى معايير الجودة"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "أمان مضمون",
      description: "حماية كاملة لممتلكاتك"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "سرعة في التنفيذ",
      description: "التزام بالمواعيد المحددة"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">من نحن - شركة نقل أثاث بالرياض</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed">
              شركة عالم النقل - رائدة في مجال نقل الأثاث والعفش بالرياض
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              شركة عالم النقل هي أفضل شركة نقل عفش وأثاث بالرياض، متخصصة في تقديم خدمات نقل احترافية مع تخزين آمن وخدمات فك وتركيب. 
              نحن نفخر بفريقنا المحترف والمتخصص في نقل أثاث بالرياض الذي يتعامل مع جميع أنواع الأثاث والممتلكات بعناية فائقة ودقة عالية، 
              مهما كان حجمها أو نوعها. نوفر تخزين آمن وخدمات فك وتركيب احترافية.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              كشركة نقل عفش رائدة بالرياض، نسعى دائماً لتقديم أفضل خدمات نقل الأثاث لعملائنا الكرام من خلال استخدام أحدث المعدات والتقنيات، 
              مع توفير تخزين آمن وخدمات فك وتركيب متخصصة، والالتزام بأعلى معايير الأمان والجودة في جميع عملياتنا.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">+10 سنوات خبرة</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">+1000 عميل راضي</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">خدمة 24/7</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;