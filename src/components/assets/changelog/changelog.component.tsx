import changelog from "@/consts/changelog";
import styles from "./changelog.module.css";
import * as pack from "@/../package.json";

export default function ChangelogSection() {
    return (
        <section className={styles.changelog}>
            <div className={styles.title_section}>
                <span className={styles.title}>
                    <h1>패치노트</h1>
                    <hr />
                    <p>현재 버전: {pack.version}</p>
                </span>
                <p className={styles.vlite}>현재 버전: {pack.version}</p>
                <p className={styles.date}>
                    적용 일자: {changelog.find(version => version.version === pack.version)?.date}
                </p>
            </div>
            <ul className={styles.content}>
                {changelog.map(version => {
                    return (
                        <li key={version.version} className={styles.vcontent}>
                            <span className={styles.vname}>
                                <h1>버전 {version.version}</h1>
                                <hr />
                            </span>
                            <p className={styles.date}>적용일자: {version.date}</p>
                            <ul>
                                {version.content.map((line, index) => {
                                    // eslint-disable-next-line react/no-array-index-key
                                    return <li key={`${version.version}-${index}`}>{line}</li>;
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
