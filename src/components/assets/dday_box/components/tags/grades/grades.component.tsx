/* eslint-disable indent */
import styles from "./grades.module.css";

export default function GradeSpan(props: { grades: null | number[] }) {
    const { grades } = props;

    switch (grades) {
        case null:
            return (
                <span className={styles.grades}>
                    <p className={styles.all}>공통</p>
                </span>
            );
        default:
            return (
                <span className={styles.grades}>
                    {grades?.includes(1) ? <p className={styles.first}>1학년</p> : null}
                    {grades?.includes(2) ? <p className={styles.second}>2학년</p> : null}
                    {grades?.includes(3) ? <p className={styles.third}>3학년</p> : null}
                </span>
            );
    }
}
