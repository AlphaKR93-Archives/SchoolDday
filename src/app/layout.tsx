import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "석동중학교 라이브 디데이 카운터",
    description: "by AlphaKR93",
    keywords: ["석동중", "석동중 디데이", "석동중 시험", "석동중 고사", "석동중 일정", "석동중 디데이", "석동중 행사"],
    creator: "AlphaKR93",
    publisher: "AlphaKR93",
    authors: [{ name: "AlphaKR93", url: "https://alpha93.kr/" }],
    applicationName: "석동중학교 라이브 디데이 카운터"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <Analytics />
            <body>
                <Navigation />
                <div className={"wrapper bg-light dark:bg-primary h-auto w-auto"}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
