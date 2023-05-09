import styles from "./dday_box.module.css";
import dayjs from "dayjs";

export default function DdayBox(props: {
    name: string;
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
    grade: null | number[];
    tag: null | string[];
}) {
    return (
        <div className={styles.dday_box}>
            <span className={styles.title}>
                <p>2학기 1차고사</p>
                <p>(D-69)</p>
            </span>
            <div className={styles.content_box}>
                <section className={styles.tags}>
                    <span className={styles.grades}>
                        <p className={styles.first}>1학년</p>
                        <p className={styles.second}>2학년</p>
                        <p className={styles.third}>3학년</p>
                    </span>
                    <p className={styles.exam}>지필고사</p>
                </section>
                <section className={styles.counter}>
                    <span>
                        <p>12</p>:<p>34</p>:<p>56</p>:<p>78</p>
                    </span>
                    <p className={styles.milli}>.910</p>
                </section>
                <section className={styles.date}>
                    <p>2023. 05. 23. 월</p>~<p>2023. 05. 24. 화</p>
                </section>
            </div>
        </div>
    );
}
