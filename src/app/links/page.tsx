import {
    CdnMiraeN,
    ChungaeTextbook,
    KumsungMall,
    YBMTextbook
} from "@/components/assets/icons/textbook_provider/textbook_provider";
import Image from "next/image";
import Link from "next/link";
import AnimatedSimpleIcon from "@/components/assets/icons/simple-icons/provider";
import styles from "./page.module.css";

export default function UsefulLinksPage() {
    return (
        <main className={styles.links}>
            <section>
                <div className={styles.title}>
                    <h1>석동중학교</h1>
                    <hr />
                </div>
                <ul className={styles.text_elements}>
                    <Link href="https://seokdong-m.gne.go.kr/seokdong-m/main.do">
                        <li>
                            <p>홈페이지</p>
                        </li>
                    </Link>
                    <Link href="https://www.1365.go.kr/vols/main.do">
                        <li>
                            <p>1365</p>
                        </li>
                    </Link>
                    <Link href="https://www.instagram.com/jinhae_seokdongjung/">
                        <li className="flex w-full items-center justify-center">
                            <AnimatedSimpleIcon
                                id="instagram"
                                color={{
                                    light: { primary: "6B7280", secondary: "6B7280" },
                                    dark: { primary: "6B7280", secondary: "6B7280" }
                                }}
                            />
                            대전
                        </li>
                    </Link>
                    <Link href="https://www.instagram.com/sdbs_sd/">
                        <li className="flex w-full items-center justify-center">
                            <AnimatedSimpleIcon
                                id="instagram"
                                color={{
                                    light: { primary: "6B7280", secondary: "6B7280" },
                                    dark: { primary: "6B7280", secondary: "6B7280" }
                                }}
                            />
                            방송부
                        </li>
                    </Link>
                    <Link href="https://www.instagram.com/sd_mathclub/">
                        <li className="flex w-full items-center justify-center">
                            <AnimatedSimpleIcon
                                id="instagram"
                                color={{
                                    light: { primary: "6B7280", secondary: "6B7280" },
                                    dark: { primary: "6B7280", secondary: "6B7280" }
                                }}
                            />
                            수체실
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2070">
                        <li>
                            <p>사회과부도</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb3813">
                        <li>
                            <p>역사부도</p>
                        </li>
                    </Link>
                </ul>
            </section>
            <section>
                <div className={styles.title}>
                    <h1>전학년 공통 E-book</h1>
                    <hr />
                </div>
                <ul className={styles.elements}>
                    <Link href="https://file.kumsung.co.kr/text/ebook/2015re/pre2018/2-mid/6_m_giga1/webview/index.html">
                        <li>
                            <KumsungMall path="R1516609963301m" />
                            <p>기술가정 1</p>
                        </li>
                    </Link>
                    <Link href="https://file.kumsung.co.kr/text/ebook/2015re/pre2018/2-mid/6_m_giga2/webview/index.html">
                        <li>
                            <KumsungMall path="Rmid_1516610037678" />
                            <p>기술가정 2</p>
                        </li>
                    </Link>
                    <Link href="https://www.ybmcloud.com/viewer/ybm-textbook/pc?contentId=UP020501000000000009&ybmTextbookId=Y08240301042018RJcnN&target=_blank">
                        <li>
                            <YBMTextbook path="T022504584482MeX" />
                            <p>음악 1</p>
                        </li>
                    </Link>
                    <Link href="https://www.ybmcloud.com/viewer/ybm-textbook/pc?contentId=UP020601000000000009&ybmTextbookId=Y08240305172018MUhTF&target=_blank">
                        <li>
                            <YBMTextbook path="T0225050011dgjKh" />
                            <p>음악 2</p>
                        </li>
                    </Link>
                    <Link href="http://cdata2.tsherpa.co.kr/tsherpa/DocumentFile/pdf/2018/20180912/%EC%B2%9C%EC%9E%AC%EA%B5%90%EA%B3%BC%EC%84%9C_%EC%A4%91%EB%93%B1%EA%B5%90%EA%B3%BC%EC%84%9C_%EB%AF%B8%EC%88%A0%E2%91%A1_%EA%B9%80%EC%84%A0%EC%95%84(15%EA%B0%9C%EC%A0%95)_%EA%B5%90%EA%B3%BC%EC%84%9C%20%EB%B3%B8%EB%AC%B8.pdf">
                        <li>
                            <ChungaeTextbook path="ff6752237d363fee13778cff6e92f0d8" />
                            <p>미술 2</p>
                        </li>
                    </Link>
                    <Link href="http://link.visang.com/?id=q70kZw05u9h0MV6r-E6KEOX1kKFjHQgGCcIbsSzuMVc=">
                        <li>
                            <Image
                                src="https://textbook.visang.com/upload/Book/201802/20180211123402335.jpg"
                                alt="Visang Textbook"
                                width={119}
                                height={157}
                            />
                            <p>체육 1&2</p>
                        </li>
                    </Link>
                </ul>
            </section>
            <section>
                <div className={styles.title}>
                    <h1>1학년 E-book</h1>
                    <hr />
                </div>
                <ul className={styles.elements}>
                    <Link href="https://ebook.mirae-n.com/@kb2052">
                        <li>
                            <CdnMiraeN path="6003640/6003640_20180309161112" />
                            <p>국어 1-1</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2053">
                        <li>
                            <CdnMiraeN path="6003641/6003641_20180309161404" />
                            <p>국어 1-2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2072">
                        <li>
                            <CdnMiraeN path="6003643/6003643_20180309170654" />
                            <p>수학 1</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2071">
                        <li>
                            <CdnMiraeN path="6003644/6003644_20180312174439" />
                            <p>사회 1</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2050">
                        <li>
                            <CdnMiraeN path="6003649/6003649_20180312180813" />
                            <p>과학 1</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2074">
                        <li>
                            <CdnMiraeN path="6003642/6003642_20180309165232" />
                            <p>영어 1</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2061">
                        <li>
                            <CdnMiraeN path="6003646/6003646_20180312175507" />
                            <p>도덕 1</p>
                        </li>
                    </Link>
                </ul>
            </section>
            <section>
                <div className={styles.title}>
                    <h1>2학년 E-book</h1>
                    <hr />
                </div>
                <ul className={styles.elements}>
                    <Link href="https://ebook.mirae-n.com/@kb2054">
                        <li>
                            <CdnMiraeN path="6004309/6004309_20190228111749" />
                            <p>국어 2-1</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2368">
                        <li>
                            <CdnMiraeN path="6004310/6004310_20190228112115" />
                            <p>국어 2-2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2073">
                        <li>
                            <CdnMiraeN path="6004311/6004311_20190228112802" />
                            <p>수학 2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2069">
                        <li>
                            <CdnMiraeN path="6003645/6003645_20180312175130" />
                            <p>사회 2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2051">
                        <li>
                            <CdnMiraeN path="6004312/6004312_20190228113127" />
                            <p>과학 2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2075">
                        <li>
                            <Image
                                src="https://www.mirae-n.com/UPLOAD/EShop/Product/01/6004264/6004264_20190220120028.JPG"
                                alt="MiraeN Textbook"
                                width={119}
                                height={157}
                            />
                            <p>영어 2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb3811">
                        <li>
                            <CdnMiraeN path="6005109/6005109_20200428083249" />
                            <p>역사 1</p>
                        </li>
                    </Link>
                    <Link href="https://www.ybmcloud.com/viewer/ybm-textbook/pc?contentId=UP021501000000000016&ybmTextbookId=Y082403230320182Kgk9&target=_blank">
                        <li>
                            <YBMTextbook path="T0222022341hFIDR" />
                            <p>보건</p>
                        </li>
                    </Link>
                </ul>
            </section>
            <section>
                <div className={styles.title}>
                    <h1>3학년 E-book</h1>
                    <hr />
                </div>
                <ul className={styles.elements}>
                    <Link href="https://ebook.mirae-n.com/@kb3806">
                        <li>
                            <CdnMiraeN path="6005100/6005100_20200427135742" />
                            <p>국어 3-1</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb3807">
                        <li>
                            <CdnMiraeN path="6005101/6005101_20200427140739" />
                            <p>국어 3-2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb3809">
                        <li>
                            <CdnMiraeN path="6005102/6005102_20200427141755" />
                            <p>수학 3</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb3810">
                        <li>
                            <CdnMiraeN path="6005104/6005104_20200427144646" />
                            <p>과학 3</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb3808">
                        <li>
                            <CdnMiraeN path="6004933/6004933_20200129165655" />
                            <p>영어 3</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb3812">
                        <li>
                            <CdnMiraeN path="6005110/6005110_20200428083534" />
                            <p>역사 2</p>
                        </li>
                    </Link>
                    <Link href="https://ebook.mirae-n.com/@kb2062">
                        <li>
                            <CdnMiraeN path="6003647/6003647_20180312180000" />
                            <p>도덕 2</p>
                        </li>
                    </Link>
                    <Link href="https://file.kumsung.co.kr/text/ebook/2015re/pre2018/2-mid/6_m_info/webview/index.html">
                        <li>
                            <KumsungMall path="Rmid_1516609738726" />
                            <p>정보</p>
                        </li>
                    </Link>
                </ul>
            </section>
        </main>
    );
}
