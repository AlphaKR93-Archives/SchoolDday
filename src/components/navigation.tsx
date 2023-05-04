import Link from "next/link";

export default function Navigation() {
    return (
        <header className={"navigation-bar"}>
            <div className={"flex justify-between border-b border-gray-600 bg-dark px-4 py-4 font-escore text-white"}>
                <div className={"navbar"} style={{ flex: "1 0 30%" }}>
                    <Link href={"/"}>홈</Link>
                    <Link href={"/about"}>정보</Link>
                </div>
                <div className={"text-center text-2xl"} style={{ flex: "1 0 40%" }}>
                    <Link href={"/"}>
                        <div className={"hide lg:show"}>석동중학교 라이브 디데이 카운터</div>
                        <div className={"show lg:hide"}>석동중 디데이</div>
                    </Link>
                </div>
                <div style={{ flex: "1 0 30%" }}></div>
            </div>
        </header>
    );
}
