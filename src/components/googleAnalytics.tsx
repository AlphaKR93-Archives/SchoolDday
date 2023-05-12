import Script from "next/script";
import React from "react";

export default function GoogleAnalytics() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X3TG17T2YP" />
            <Script id="google_analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-X3TG17T2YP');
                `}
            </Script>
        </>
    );
}
