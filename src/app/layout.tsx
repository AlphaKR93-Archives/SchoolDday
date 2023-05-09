import "./globals.css";
import React from "react";
import Header from "@/components/main/header/header";
import Providers from "@/components/store/provider";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
    title: "석동중 디데이",
    description: "석동중학교 학생들을 위한 디데이 사이트입니다.",
    applicationName: "석동중학교 라이브 디데이 카운터",
    authors: [{ name: "AlphaKR93", url: "https://alpha93.kr/" }],
    keywords: ["석동중", "디데이"],
    creator: "AlphaKR93",
    publisher: "AlphaKR93"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className="font-escore">
                <Providers>
                    <Analytics />
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
