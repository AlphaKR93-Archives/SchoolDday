import dayjs from "dayjs";

export type BirthdayConstsType = {
    name: string;
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
}[];
