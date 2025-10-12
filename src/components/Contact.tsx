import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { gtagReportConversion, CONVERSION_IDS } from "../utils/gtag";


const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "خدمة العملاء",
      details: ["0507838607"],
      type: "phone",
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-600" />,
      title: "الشكاوي والاقتراحات",
      details: ["0546446013"],
      type: "phone",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "البريد الإلكتروني",
      details: ["alamelnagl@gmail.com"],
      type: "email",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "الموقع",
      details: ["الرياض، السعودية"],
      type: "location",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "ساعات العمل",
      details: ["24 ساعة / 7 أيام"],
      type: "hours",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            اتصل بشركة نقل العفش
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            شركة عالم النقل هنا لخدمتك على مدار الساعة. تواصل معنا للحصول على
            استشارة مجانية لخدمات نقل الأثاث والعفش بالرياض
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                info.title.includes("الشكاوي")
                  ? "border-t-4 border-orange-500"
                  : "border-t-4 border-blue-500"
              }`}
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3
                className={`text-lg font-bold mb-3 ${
                  info.title.includes("الشكاوي")
                    ? "text-orange-800"
                    : "text-gray-800"
                }`}
              >
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>
                    {info.type === "phone" ? (
                      <a
                        id="call_button_5"
                        href={`tel:${detail}`}
                        onClick={(e) => {
                  e.preventDefault();
                  gtagReportConversion(
                    "tel:+966546446013",
                    CONVERSION_IDS.PHONE_CALL
                  );
                }}
                        className={`font-semibold transition-colors ${
                          info.title.includes("الشكاوي")
                            ? "text-orange-600 hover:text-orange-800"
                            : "text-blue-600 hover:text-blue-800"
                        }`}
                      >
                        {detail}
                      </a>
                    ) : info.type === "email" ? (
                      <a
                        href={`mailto:${detail}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p className="text-gray-700">{detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-blue-800 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              شركة نقل عفش جاهزة لخدمتك
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              احصل على عرض سعر مجاني واستشارة شاملة لخدمات نقل الأثاث والعفش مع
              تخزين آمن وفك وتركيب
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                id="call_button_6"
                href="tel:0507838607"
                onClick={(e) => {
                  e.preventDefault();
                  gtagReportConversion(
                    "tel:0507838607",
                    CONVERSION_IDS.PHONE_CALL
                  );
                }}
                className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل الآن - 0507838607</span>
              </a>

              <a
                id="whatsapp_button_2"
                href="https://wa.me/+966507838607"
                onClick={(e) => {
                  e.preventDefault();
                  gtagReportConversion(
                    "https://wa.me/+966507838607",
                    CONVERSION_IDS.WHATSAPP
                  );
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
