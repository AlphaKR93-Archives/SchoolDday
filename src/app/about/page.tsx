import Image from "next/image";
import { AtSymbolIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
                            className="rounded-full"
                        />
                        <div>
                            <div className={styles.me}>
                                <p className={styles.name}>AlphaKR93</p>
                                <p className={styles.pronoun}>He/Him</p>
                            </div>
                            <hr className="my-5" />
                            <p className={styles.desc}>Full-stack Student Developer</p>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <Link href="mailto:dev@alpha93.kr">
                            <AtSymbolIcon />
                            <p>dev@alpha93.kr</p>
                        </Link>
                        <Link href="https://github.com/AlphaKR93">
                            <Image
                                src="https://cdn.simpleicons.org/github/6B7280"
                                alt="github icon"
                                width={21}
                                height={21}
                            />
                            <p>AlphaKR93</p>
                        </Link>
                        <Link href="https://toss.me/alphakr93">
                            <CurrencyDollarIcon />
                            <p>AlphaKR93</p>
                        </Link>
                        <Link href="https://instagram.com/@alphakr93">
                            <Image
                                src="https://cdn.simpleicons.org/instagram/6B7280"
                                alt="instagram icon"
                                width={21}
                                height={21}
                            />
                            <p>AlphaKR93</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
