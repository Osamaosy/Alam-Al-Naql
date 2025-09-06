import { Phone, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                شركة نقل عفش بالرياض - عالم النقل
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-700 font-medium">
                أفضل شركة نقل أثاث بالرياض - تخزين آمن وفك وتركيب احترافي
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              شركة عالم النقل هي أفضل شركة نقل عفش وأثاث بالرياض. نقدم خدمات نقل
              احترافية مع تخزين آمن وخدمات فك وتركيب الأثاث والمكيفات بأعلى
              معايير الجودة والاحترافية.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل الآن</span>
              </button>

              <a
                href="tel:+966595107071"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
              >
                059-510-7071
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/Gemini_Generated_Image_5ftbtz5ftbtz5ftb.png"
                alt="شركة نقل عفش بالرياض - فريق عالم النقل المحترف لنقل الأثاث"
                className="w-full h-96 lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <img
                src="/images/image.png"
                alt="شركة عالم النقل - لوجو"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
