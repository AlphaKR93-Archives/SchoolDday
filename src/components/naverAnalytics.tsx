import Script from "next/script";
import React from "react";

export default function NaverAnalytics() {
    return (
        <>
            <Script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
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
