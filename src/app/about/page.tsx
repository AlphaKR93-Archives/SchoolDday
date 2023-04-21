import Image from "next/image";
import ProfileImage from "@/assets/icon/profile.png";
import GitHubImage from "@/assets/icon/github.svg";
import TossImage from "@/assets/icon/toss.png";
import Link from "next/link";
import versionInformation from "@/resources/changelog";

function makeChangelog() {
    return versionInformation.changelog.map(item => {
        return (
            // eslint-disable-next-line react/jsx-key
            <li className={"mt-7"}>
                <div className={"text-xl font-bold"}>버전 {item.version}</div>
                <ul>
                    <div className={"font-bold"}>{item.date}</div>
                    {item.content.map(content => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <li>- {content}</li>
                        );
                    })}
                </ul>
            </li>
        );
    });
}

export default function About() {
    return (
        <div className={"font-escore"}>
            <div className={"container mt-10 rounded-2xl bg-gray-200 p-10"}>
                <div className={"pt-8 text-center"}>
                    <div className={"text-3xl"}>업데이트 기록</div>
                    <div className={"mt-2"}>현재 버전: {versionInformation.version}</div>
                </div>
                <hr className={"mx-auto my-8 bg-gray-400"} style={{ width: "20em" }}></hr>
                <ul className={"content"}>{makeChangelog()}</ul>
            </div>
            <div className={"hide lg:show"}>
                <div className={"container mt-10 rounded-2xl bg-gray-200 p-10"}>
                    <div className={"m-10 flex justify-between"}>
                        <Image
                            src={ProfileImage}
                            alt={"Developer's profile image"}
                            style={{ borderRadius: "100%" }}
                            width={128}
                            height={128}
                        ></Image>
                        <div className={"my-auto ml-8"}>
                            <div className={"flex justify-between"}>
                                <div className={"mb-4 text-4xl text-gray-500"}>AlphaKR93</div>
                                <div className={"mt-2 text-2xl text-gray-400"}>He/Him</div>
                            </div>
                            <hr className={"mx-auto bg-gray-400"} style={{ width: "22em" }}></hr>
                            <div className={"mt-4 text-xl text-gray-400"}>
                                <Link href={"mailto:dev@alpha93.kr"}>dev@alpha93.kr</Link>
                            </div>
                        </div>
                        <div className={"my-auto ml-auto flex justify-between text-2xl text-gray-400"}>
                            <Link href={"https://toss.me/AlphaKR93"}>
                                <Image src={TossImage} alt={"TossIcon"} width={42} className={"ml-4"}></Image>
                            </Link>
                            <Link href={"https://github.com/AlphaKR93"}>
                                <Image src={GitHubImage} alt={"GitHub Icon"} width={42} className={"ml-4"}></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"show lg:hide"}>
                <div className={"container mt-10 flex rounded-2xl bg-gray-200 p-5"}>
                    <Image
                        src={ProfileImage}
                        alt={"Developer's profile image"}
                        style={{ borderRadius: "100%" }}
                        width={114}
                        height={114}
                    ></Image>
                    <div className={"my-auto ml-7"}>
                        <div className={"flex"}>
                            <div className={"mb-3 text-2xl text-gray-500"}>AlphaKR93</div>
                            <div className={"ml-3 text-xl text-gray-400"}>He/Him</div>
                        </div>
                        <hr className={"bg-gray-400"}></hr>
                        <div className={"mt-3 flex text-gray-400"}>
                            <Link href={"mailto:dev@alpha93.kr"} className={"my-auto"}>
                                dev@alpha93.kr
                            </Link>
                            <Link href={"https://toss.me/AlphaKR93"} className={"my-auto"}>
                                <Image src={TossImage} alt={"TossIcon"} width={28} className={"ml-4"}></Image>
                            </Link>
                            <Link href={"https://github.com/AlphaKR93"} className={"my-auto"}>
                                <Image src={GitHubImage} alt={"GitHub Icon"} width={28} className={"ml-4"}></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
