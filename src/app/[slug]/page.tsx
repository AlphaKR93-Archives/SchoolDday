import styles from "@/app/errorpages.module.css";
import Link from "next/link";
import { setCookie } from "cookies-next";
import GravityHandler from "@/app/[slug]/gravity_handler";

export default function DynamicPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    if (slug === "rohunji") {
        setCookie("rohunji", "true");
        return (
            <main>
                <GravityHandler />
                <div>
                    <Link href="/" className="m-full flex h-full items-center justify-center">
                        <div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://media.tenor.com/IRpvIiAnkyQAAAAC/laugh-so-funny.gif"
                                alt="야, 기분 좋다!"
                                width="523px"
                                height="598px"
                            />
                            <div className="text-hg mt-6 flex w-full justify-center font-bold">
                                <div className="bg-hg rounded-xl px-6 py-4">돌아가기</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className={styles.not_found}>
                <span className="text-5xl font-bold italic">Oops!</span>
                <span className="mt-4 text-xl">404 | Page not found</span>
                <hr className="bg-sec mt-6 w-full" />
                <span className="mt-6">{slug} (으)로 도달할 수 없습니다.</span>
                <span className="mt-1">존재하지 않는 페이지이거나 페이지가 깨졌을 수 있습니다.</span>
                <span className="mt-6">
                    <Link href="/" className="bg-hg text-hg rounded-xl p-5 font-bold">
                        메인 페이지로 이동
                    </Link>
                </span>
            </div>
        </main>
    );
}
