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
            <Script type="text/javascript" src="http://wcs.naver.net/wcslog.js" />
            <Script id="naver_analytics">
                {`
                    if (!wcs_add) var wcs_add = {};
                    wcs_add["wa"] = "1b01d690308afe0";
                    if (window.wcs) wcs_do();
                    `}
            </Script>
        </>
    );
}
