import dayjs from "dayjs";
import styles from "./semester.module.css";

export default function SemesterComponent(props: { date: { start: dayjs.Dayjs; end: null | dayjs.Dayjs } }) {
    const { date } = props;

    if (date.start !== null) {
        if (date.start < dayjs("2023-08-16T08:30:00.000+09:00")) {
            return <p className={styles.semester_first}>1학기</p>;
        }
        if (date.start < dayjs("2024-01-05T12:20:00.000+09:00")) {
            return <p className={styles.semester_second}>2학기</p>;
        }
        return <p className={styles.semester_third}>2024년</p>;
    }
    return null;
}
