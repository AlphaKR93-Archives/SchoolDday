import Link from "next/link";

export default function navigation() {
    return (
        <div className={"navigation-bar"}>
            <div className={"flex justify-between border-b border-gray-600 bg-dark px-4 py-4 font-escore text-white"}>
                <div style={{ flex: "1 0 30%" }}>
                    <Link href={"/"} style={{ lineHeight: "30px" }}>
                        홈
                    </Link>
                    <Link href={"/about"} style={{ lineHeight: "30px" }}>
                        정보
                    </Link>
                </div>
                <div className={"text-center text-2xl"} style={{ flex: "1 0 40%" }}>
                    <div className={"hide lg:show"}>석동중학교 라이브 디데이 카운터</div>
                    <div className={"show lg:hide"}>석동중 디데이</div>
                </div>
                <div style={{ flex: "1 0 30%" }}></div>
            </div>
        </div>
    );
}
