const Gallery = () => {
  const galleryItems = [
    {
      image: "/images/f02f7174-bf7f-4fd6-b924-b43db75f3a60.jpeg",
      caption: "نقل أثاث احترافي وآمن",
      description: "فريقنا المحترف في نقل الأثاث بالرياض يتعامل مع العفش بعناية فائقة"
    },
    {
      image: "/images/f94957af-a99d-4d74-b31c-e889f7dede61.jpeg",
      caption: "فك وتركيب الأجهزة",
      description: "خبرة في فك وتركيب ونقل جميع أنواع الأجهزة المنزلية بأمان"
    },
    {
      image: "/images/pexels-photo-7464702.webp?auto=compress&cs=tinysrgb&w=800",
      caption: "تعبئة وتغليف الأثاث",
      description: "تعبئة وتغليف احترافي للأثاث والعفش لضمان تخزين آمن ونقل سليم"
    },
    {
      image: "/images/pexels-photo-7464226.webp?auto=compress&cs=tinysrgb&w=800",
      caption: "نقل مكاتب وشركات",
      description: "خدمات متخصصة لنقل المكاتب والمؤسسات مع فك وتركيب احترافي"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">أعمال نقل الأثاث والعفش</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            نفخر بأعمال نقل الأثاث والعفش التي نقوم بها في الرياض مع خدمات تخزين آمن وفك وتركيب احترافي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">{item.caption}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">آراء عملاء شركة نقل العفش</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                text: "أفضل شركة نقل عفش بالرياض! خدمة ممتازة وفريق محترف. تم نقل أثاث منزلي مع تخزين آمن وفك وتركيب احترافي.",
                rating: 5
              },
              {
                name: "فاطمة العلي",
                text: "شركة نقل أثاث ممتازة! العمال مهذبون ومحترفون في فك وتركيب الأثاث والأسعار معقولة جداً.",
                rating: 5
              },
              {
                name: "خالد السعد",
                text: "شكراً لشركة عالم النقل على خدمة نقل العفش الرائعة مع تخزين آمن. سأنصح بهم جميع أصدقائي.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-blue-600 font-semibold text-center">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;