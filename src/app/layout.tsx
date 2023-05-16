import "./globals.css";
import React from "react";
import Header from "@/components/main/header/header";
import { Metadata } from "next";
import AnalyticsProvider from "@/components/main/provider/analytics_provider";
import MobileNavigationBarComponent from "@/components/main/mobile_navbar/mobile_navbar.component";
import Providers from "@/store/provider";
import dayjs from "dayjs";
import Link from "next/link";

export const metadata: Metadata = {
    title: "석동중 디데이",
    description: "석동중학교 학생들을 위한 디데이 사이트입니다.",
    applicationName: "석동중학교 라이브 디데이 카운터",
    authors: [{ name: "AlphaKR93", url: "https://alpha93.kr/" }],
    keywords: ["석동중", "석동중 디데이", "석동중 시험", "석동중 고사", "석동중 일정", "석동중 디데이", "석동중 행사"],
    creator: "AlphaKR93",
    publisher: "AlphaKR93",
    verification: { other: { "naver-site-verification": "c070ebcbedf1956dadcd0fa3f6c4207d16d21856" } }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body>
                <Providers>
                    <div className="body">
                        <Header />
                        {children}
                        <MobileNavigationBarComponent />
                        <footer>
                            <div className="real">
                                <div>
                                    <span className="flex items-end gap-4">
                                        <h1>석동중학교 디데이 카운터</h1>
                                        <p className="mb-1">버전 1.2.3.4</p>
                                    </span>
                                    <p>Copyright (C) 2022-{dayjs().year()} AlphaKR93, Licenced under MIT License.</p>
                                </div>
                                <Link href="https://status.alpha93.kr/" className="button default">
                                    사이트 상태
                                </Link>
                            </div>
                        </footer>
                    </div>
                    <div className="unsupported-size">
                        <p>
                            본 사이트에서
                            <br />
                            지원하지 않는
                            <br />
                            화면 크기입니다.
                        </p>
                    </div>
                </Providers>
                <AnalyticsProvider />
            </body>
        </html>
    );
}
