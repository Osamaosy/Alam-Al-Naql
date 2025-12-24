
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

export const CONVERSION_IDS = {
    PHONE_CALL: 'AW-17598387898/QtVBCKXaiKMbELqtyMdB',
    WHATSAPP: 'AW-17598387898/VKIiCLrjiKMbELqtyMdB',
} as const;


export const gtagReportConversion = (conversionId: string): void => {
    try {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "conversion", {
                send_to: conversionId,
            });
        }
    } catch (error) {
        console.error("خطأ في تتبع التحويل:", error);
    }
};

/**
 * تتبع حدث مخصص في Google Analytics
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