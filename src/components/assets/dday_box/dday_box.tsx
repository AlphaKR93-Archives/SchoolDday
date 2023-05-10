import dayjs from "dayjs";
import "dayjs/locale/ko";
import SemesterComponent from "@/components/assets/dday_box/components/tags/date/semester/semester.component";
import RemainDateComponent from "@/components/assets/dday_box/components/tags/date/remain/remains.component";
import CounterComponent from "@/components/assets/dday_box/components/content/counter/counter.component";
import styles from "./dday_box.module.css";
import GradeSpan from "./components/tags/grades/grades.component";
import TypeSpan, { DdayType } from "./components/tags/type/type.component";

export default function DdayBox(props: {
    name: string;
    type: DdayType;
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
    grades: null | number[];
}) {
    const { name, type, date, grades } = props;

    return (
        <div className={styles.dday_box}>
            <div>
                <span className={styles.title}>{name}</span>
                <div className={styles.content_box}>
                    <section className={styles.tags}>
                        <span className={styles.date_informations}>
                            <SemesterComponent date={date} />
                            <RemainDateComponent start={date.start.valueOf()} end={date.end.valueOf()} />
                        </span>
                        <GradeSpan grades={grades} />
                        <TypeSpan type={type} />
                    </section>
                    <CounterComponent start={date.start.valueOf()} end={date.end.valueOf()} />
                    <section className={styles.date}>
                        <p>{date.start.locale("ko").format("YYYY. MM. DD ddd")}</p>~
                        <p>{date.end.locale("ko").format("YYYY. MM. DD ddd")}</p>
                    </section>
                    <section className={styles.date_lite}>
                        <p>{date.start.locale("ko").format("MM. DD ddd")}</p>~
                        <p>{date.end.locale("ko").format("MM. DD ddd")}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
