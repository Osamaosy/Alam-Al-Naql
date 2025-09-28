import { Phone, ArrowDown } from "lucide-react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[]; 
  }
}
// الدالة الجديدة للتحويل المباشر (Direct Conversion)
const gtag_report_direct_conversion = (
  conversionType: "call" | "contact"
): void => {
  try {
    let conversionId = "";

    if (conversionType === "call") {
      // انقر للاتصال
      conversionId = "AW-17598387898/QtVBCKXaiKMbELqtyMdB";
    } else if (conversionType === "contact") {
      // جهة اتصال / واتساب
      conversionId = "AW-17598387898/VKIiCLrjiKMbELqtyMdB";
    }

    // نستخدم dataLayer.push مباشرة لتجنب مشاكل توقيت تحميل gtag.js
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "conversion",
        send_to: conversionId,
      });
      // تم إزالة event_callback لأنه غير ضروري لروابط المغادرة السريعة
    }
  } catch (error) {
    console.error("خطأ في تتبع التحويل:", error);
  }
  // لم نعد نستخدم return false، مما يسمح للرابط بالعمل تلقائياً.
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg bg-pattern pt-20 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 float-animation"></div>
      <div
        className="absolute bottom-32 left-16 w-16 h-16 bg-green-200 rounded-full opacity-20 float-animation"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20 float-animation"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                🏆 الشركة الرائدة في نقل الأثاث
              </div>
              <h1 className="gradient-text leading-tight">
                شركة <span className="text-blue-900">عالم النقل</span>
                <br />
                <span className="text-3xl lg:text-4xl">
                  أفضل شركة نقل عفش بالرياض
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-blue-700 font-semibold leading-relaxed">
                ✨ خدمات نقل أثاث احترافية مع تخزين آمن وفك وتركيب متخصص
              </h2>
            </div>

            <p className="hero-text max-w-2xl mx-auto lg:mx-0 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              🚚 <strong>شركة عالم النقل</strong> - شريكك الموثوق في نقل الأثاث
              والعفش بالرياض
              <br />
              🔒 نوفر <strong>تخزين آمن</strong> وخدمات{" "}
              <strong>فك وتركيب احترافية</strong> للأثاث والمكيفات
              <br />⭐ أكثر من <strong>10 سنوات خبرة</strong> و{" "}
              <strong>+1000 عميل راضي</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                id="call_button_2"
                href="tel:+966595107071"
                onClick={() => {
                  gtag_report_direct_conversion("call");
                }}
                className="btn-primary flex items-center justify-center space-x-2 space-x-reverse shadow-glow"
              >
                <Phone className="w-6 h-6 animate-bounce-gentle" />
                <span>📞 اتصل الآن - خدمة فورية</span>
              </a>

              <a
                id="call_button_1"
                href="tel:+966595107071"
                onClick={() => {
                  gtag_report_direct_conversion("call");
                  // لا يوجد e.preventDefault()، سيتم الاتصال تلقائياً
                }}
                className="btn-secondary text-center"
              >
                📱 059-510-7071
              </a>

              <a
                id="whatsapp_button"
                href="https://wa.me/+966595107071"
                onClick={() => {
                  gtag_report_direct_conversion("contact");
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center space-x-2 space-x-reverse"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>💬 واتساب فوري</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="text-blue-800 font-bold text-sm">
                  ⚡ خدمة 24/7
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="text-green-800 font-bold text-sm">
                  ✅ ضمان الجودة
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <span className="text-purple-800 font-bold text-sm">
                  🏆 أسعار منافسة
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-glow transition-all duration-500">
              <img
                src="/images/heroimage.webp"
                alt="شركة نقل عفش بالرياض - فريق عالم النقل المحترف لنقل الأثاث"
                className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl float-animation">
              <img
                src="/images/image.webp"
                alt="شركة عالم النقل - لوجو"
                className="w-12 h-12 object-contain rounded-lg"
              />
            </div>

            {/* Additional floating badges */}
            <div
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-2xl shadow-xl float-animation"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">+1000</div>
                <div className="text-xs">عميل راضي</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
            <ArrowDown className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
