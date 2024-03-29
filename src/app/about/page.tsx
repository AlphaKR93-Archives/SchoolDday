import Image from "next/image";
import { AtSymbolIcon, CurrencyDollarIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import ChangelogSection from "@/components/main/content/about/changelog/changelog.component";
import AnimatedSimpleIcon from "@/components/assets/icons/simple-icons/provider";
import styles from "./page.module.css";

export default function AboutPage() {
    return (
        <main className={styles.about}>
            <section>
                <div className={styles.title}>
                    <h1>개발자 프로필</h1>
                    <hr />
                </div>
                <div className={styles.content}>
                    <div className={styles.profile}>
                        <Image
                            src="https://avatars.githubusercontent.com/u/44059783"
                            alt="Developer's profile avatar"
                            width={128}
                            height={128}
                        />
                        <div>
                            <div className={styles.me}>
                                <Image
                                    src="https://avatars.githubusercontent.com/u/44059783"
                                    alt="Developer's profile avatar"
                                    width={32}
                                    height={32}
                                />
                                <p className={styles.name}>Alpha</p>
                            </div>
                            <hr className="my-5" />
                            <p className={styles.desc}>학생 | 소프트웨어 엔지니어 | 저널리스트 | 한글 번역가</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.social}>
                            <a href="mailto:dev@alpha93.kr">
                                <AtSymbolIcon />
                                <p>dev@alpha93.kr</p>
                            </a>
                            <a href="https://github.com/AlphaKR93">
                                <AnimatedSimpleIcon
                                    id="github"
                                    color={{
                                        light: { primary: "6B7280", secondary: "6B7280" },
                                        dark: { primary: "6B7280", secondary: "6B7280" }
                                    }}
                                />
                                <p>AlphaKR93</p>
                            </a>
                            <a href="https://instagram.com/@alphakr93">
                                <AnimatedSimpleIcon
                                    id="instagram"
                                    color={{
                                        light: { primary: "6B7280", secondary: "6B7280" },
                                        dark: { primary: "6B7280", secondary: "6B7280" }
                                    }}
                                />
                                <p>AlphaKR93</p>
                            </a>
                        </div>
                        <div className={styles.icons}>
                            <a href="https://toss.me/alphakr93">
                                <CurrencyDollarIcon />
                            </a>
                            <a href="https://www.threads.net/@dev.alphakr93">
                                <AtSymbolIcon />
                            </a>
                            <a href="https://linktr.ee/alphakr93">
                                <GlobeAltIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <ChangelogSection />
        </main>
    );
}
