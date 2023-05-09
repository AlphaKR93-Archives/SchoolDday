/* eslint-disable indent */
import styles from "./type.module.css";

export const DdayType = {
    MISCELLANEOUS: "miscellaneous",
    EXAMINATION: "examination",
    HOLIDAY: "holiday",
    EVENT: "event",
    BIRTHDAY: "birthday"
} as const;
export type DdayType = (typeof DdayType)[keyof typeof DdayType];

export default function TypeSpan(props: { type: DdayType }) {
    const { type } = props;

    switch (type) {
        case DdayType.MISCELLANEOUS:
            return <p className={styles.miscellaneous}>기타</p>;
        case DdayType.EXAMINATION:
            return <p className={styles.examination}>지필고사</p>;
        case DdayType.HOLIDAY:
            return <p className={styles.holiday}>휴교</p>;
        case DdayType.EVENT:
            return <p className={styles.event}>행사</p>;
        case DdayType.BIRTHDAY:
            return <p className={styles.birthday}>생일</p>;
        default:
            throw new Error("Invalid type");
    }
}
