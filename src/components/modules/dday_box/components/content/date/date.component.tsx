import dayjs from "dayjs";
import styles from "./date.module.css";

export default function DateSection(props: { start: dayjs.Dayjs; end: dayjs.Dayjs }) {
    const { start, end } = props;
    if (start.year() === end.year() && start.month() === end.month() && start.date() === end.date()) {
        if (
            (start.hour() === 0 && start.minute() === 0 && end.hour() === 23 && end.minute() === 59) ||
            (start.hour() === end.hour() && start.minute() === end.minute())
        )
            return (
                <section className={styles.date_section}>
                    <span className={styles.date}>
                        <p>{start.locale("ko").format("YYYY. MM. DD ddd")}</p>
                    </span>
                    <span className={styles.date_lite}>
                        <p>{start.locale("ko").format("MM. DD ddd")}</p>
                    </span>
                </section>
            );

        return (
            <section className={styles.date_section}>
                <span className={styles.date}>
                    <p>{start.locale("ko").format("YYYY. MM. DD ddd (A hh:mm")}</p>~
                    <p>{end.locale("ko").format("A hh:mm)")}</p>
                </span>
                <span className={styles.date_lite}>
                    <p>{start.locale("ko").format("MM. DD ddd (HH:mm")}</p>~<p>{end.locale("ko").format("HH:mm)")}</p>
                </span>
            </section>
        );
    }
    return (
        <section className={styles.date_section}>
            <span className={styles.date}>
                <p>{start.locale("ko").format("YYYY. MM. DD ddd")}</p>~
                <p>{end.locale("ko").format("YYYY. MM. DD ddd")}</p>({Math.ceil(end.diff(start, "day", true))}일)
            </span>
            <span className={styles.date_lite}>
                <p>{start.locale("ko").format("MM. DD ddd")}</p>~<p>{end.locale("ko").format("MM. DD ddd")}</p>(
                {Math.ceil(end.diff(start, "day", true))}일)
            </span>
        </section>
    );
}
