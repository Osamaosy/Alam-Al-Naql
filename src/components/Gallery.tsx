const Gallery = () => {
  const galleryItems = [
    {
      image: "/images/f02f7174-bf7f-4fd6-b924-b43db75f3a60.jpeg",
      caption: "🚚 نقل أثاث احترافي وآمن",
      description: "فريقنا المحترف في نقل الأثاث بالرياض يتعامل مع العفش بعناية فائقة ودقة عالية"
    },
    {
      image: "/images/f94957af-a99d-4d74-b31c-e889f7dede61.jpeg",
      caption: "🔧 فك وتركيب الأجهزة",
      description: "خبرة واسعة في فك وتركيب ونقل جميع أنواع الأجهزة المنزلية بأمان تام"
    },
    {
      image: "/images/pexels-photo-7464702.webp?auto=compress&cs=tinysrgb&w=800",
      caption: "📦 تعبئة وتغليف احترافي",
      description: "تعبئة وتغليف احترافي للأثاث والعفش لضمان تخزين آمن ونقل سليم ومحمي"
    },
    {
      image: "/images/pexels-photo-7464226.webp?auto=compress&cs=tinysrgb&w=800",
      caption: "🏢 نقل مكاتب وشركات",
      description: "خدمات متخصصة لنقل المكاتب والمؤسسات مع فك وتركيب احترافي ومتقن"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white to-gray-50 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-6">
            📸 معرض أعمالنا
          </div>
          <h2 className="gradient-text mb-6">أعمال نقل الأثاث والعفش المتميزة</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="lead-text max-w-4xl mx-auto">
            🏆 نفخر بأعمال نقل الأثاث والعفش المتميزة التي نقوم بها في الرياض مع خدمات تخزين آمن وفك وتركيب احترافي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold mb-3">{item.caption}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                عرض التفاصيل
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-6">
              ⭐ آراء العملاء
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">ماذا يقول عملاؤنا عن خدماتنا؟</h3>
            <p className="text-lg text-gray-600">شهادات حقيقية من عملاء راضين عن خدمات نقل الأثاث</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "أحمد محمد",
                text: "🌟 أفضل شركة نقل عفش بالرياض! خدمة ممتازة وفريق محترف جداً. تم نقل أثاث منزلي مع تخزين آمن وفك وتركيب احترافي. أنصح بهم بشدة!",
                rating: 5,
                location: "حي النرجس"
              },
              {
                name: "فاطمة العلي",
                text: "💎 شركة نقل أثاث ممتازة ومتميزة! العمال مهذبون ومحترفون جداً في فك وتركيب الأثاث والأسعار معقولة ومناسبة. خدمة راقية!",
                rating: 5,
                location: "حي الملقا"
              },
              {
                name: "خالد السعد",
                text: "🙏 شكراً جزيلاً لشركة عالم النقل على خدمة نقل العفش الرائعة والمتميزة مع تخزين آمن. سأنصح بهم جميع أصدقائي وأقاربي.",
                rating: 5,
                location: "حي العليا"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="text-blue-600 font-bold text-lg">- {testimonial.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold mb-4">📊 إحصائيات تتحدث عن نفسها</h4>
              <p className="text-xl text-white">أرقام حقيقية تعكس جودة خدماتنا</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+1000</div>
                <div className="text-lg opacity-90">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+10</div>
                <div className="text-lg opacity-90">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">خدمة مستمرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;