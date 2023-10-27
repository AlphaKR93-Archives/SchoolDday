import dayjs from "dayjs";
import { ddayLastUpdateYear } from "../changelog";

export type BirthdayConstsType = {
    name: string;
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
}[];

export function date(updateWhenPass: boolean, month: number, day: number, hour = 0, minute = 0, second = 0, milli = 0) {
    const returnValue = dayjs(
        `${ddayLastUpdateYear}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}T${hour
            .toString()
            .padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}.${milli
            .toString()
            .padStart(2, "0")}+09:00`
    );
    if ((updateWhenPass && returnValue < dayjs()) || month < 3) return returnValue.add(1, "year");
    return returnValue;
}

export function everyday(month: number, day: number, updateWhenPass = false) {
    return {
        start: date(updateWhenPass, month, day),
        end: date(updateWhenPass, month, day, 23, 59)
    };
}

export function fromEnd(
    from: { month: number; day: number },
    end: { month: number; day: number },
    updateWhenPass = false
) {
    return {
        start: date(updateWhenPass, from.month, from.day),
        end: date(updateWhenPass, end.month, end.day, 23, 59, 59, 999)
    };
}
