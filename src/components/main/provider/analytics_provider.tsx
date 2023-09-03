import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import React from "react";

export default function AnalyticsProvider() {
    return (
        <>
            <Analytics />
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-X3TG17T2YP" strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-X3TG17T2YP');
                    `}
            </Script>
        </>
    );
}
