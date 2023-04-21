import Image from "next/image";
import Link from "next/link";
import GitHub from "@/assets/icon/github.svg";
import versionInformation from "@/resources/changelog";

export default function footer() {
    return (
        <footer className={"footer pt-12"}>
            <hr className={"bg-gray-400"} />
            <div
                className={
                    "flex justify-between border-b border-gray-600 bg-gray-100 px-4 py-4 font-escore text-gray-500"
                }
            >
                <div style={{ flex: "1 0 20%" }}></div>
                <div style={{ flex: "1 0 60%" }}>
                    <div className={"lg:flex lg:justify-between lg:gap-3"}>
                        <div className={"my-auto inline-block text-xl lg:flex"}>
                            <div className={"hide lg:show"}>석동중학교 라이브 디데이 카운터</div>
                            <div className={"show lg:hide"}>석동중 디데이</div>
                        </div>
                        <div className={"footer-version my-auto inline-block"}>v{versionInformation.version}</div>
                        <Link
                            href={"https://github.com/AlphaKR93/SchoolDday"}
                            className={"lg:show my-auto ml-2 hidden lg:ml-auto lg:flex"}
                        >
                            <Image src={GitHub} alt={"GitHub Icon"} width={30}></Image>
                        </Link>
                    </div>
                    <div className={"lg:my-auto lg:flex"} style={{ fontSize: ".8em" }}>
                        Copyright © 2023 AlphaKR93, <br className={"show lg:hide"} />
                        Licensed under MIT License.
                    </div>
                    <Link href={"https://github.com/AlphaKR93/SchoolDday"} className={"show lg:hidden"}>
                        <Image src={GitHub} alt={"GitHub Icon"} width={30}></Image>
                    </Link>
                </div>
                <div style={{ flex: "1 0 20%" }}></div>
            </div>
        </footer>
    );
}
