// TypeScript interfaces for gtag
interface GtagConfigParams {
    [key: string]: string | number | boolean | undefined;
}

interface GtagEventParams {
    send_to?: string;
    event_callback?: () => void;
    [key: string]: string | number | boolean | (() => void) | undefined;
}

// TypeScript declaration for gtag
declare global {
    interface Window {
        gtag: (
            command: 'event' | 'config' | 'js',
            targetId: string | Date,
            config?: GtagConfigParams | GtagEventParams
        ) => void;
    }
}

// Google Ads Conversion IDs
export const CONVERSION_IDS = {
    PHONE_CALL: 'AW-17598387898/QtVBCKXaiKMbELqtyMdB',
    WHATSAPP: 'AW-17598387898/VKIiCLrjiKMbELqtyMdB',
} as const;

/**
 * تتبع التحويل في Google Ads
 * @param url - الرابط المراد التوجيه إليه
 * @param conversionId - معرف التحويل من Google Ads
 * @returns false دائماً لمنع السلوك الافتراضي
 */export const gtagReportConversion = (url: string, conversionId: string): boolean => {
    console.log('Starting tracking:', conversionId);

    try {
        let hasNavigated = false;

        const navigate = (): void => {
            if (!hasNavigated && typeof url !== "undefined") {
                hasNavigated = true;
                console.log('Navigating to:', url);
                window.location.href = url;
            }
        };

        if (typeof window !== "undefined" && window.gtag) {
            console.log('gtag is available');

            window.gtag("event", "conversion", {
                send_to: conversionId,
                event_callback: navigate,
            });

            // Increase timeout for Firefox - 1500ms instead of 1000ms
            setTimeout(navigate, 1500);
        } else {
            console.log('gtag is NOT available');
            navigate();
        }
    } catch (error) {
        console.error("Conversion tracking error:", error);
        if (typeof url !== "undefined") {
            window.location.href = url;
        }
    }
    return false;
};

/**
 * تتبع حدث مخصص في Google Analytics
 * @param eventName - اسم الحدث
 * @param eventParams - معاملات الحدث
 */
export const gtagEvent = (eventName: string, eventParams?: GtagEventParams): void => {
    try {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, eventParams);
        }
    } catch (error) {
        console.error("خطأ في تتبع الحدث:", error);
    }
};