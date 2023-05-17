import dayjs from "dayjs";
import { date, everyday } from "@/consts/dday/builder";

const anniversaries: {
    name: string;
    isHoliday: boolean;
    grades?: number[];
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
}[] = [
    {
        name: "새해",
        isHoliday: true,
        date: everyday(1, 1, true)
    },
    {
        name: "밸런타인 데이",
        isHoliday: false,
        date: everyday(2, 14)
    },
    {
        name: "2월 22일 2월 22일",
        isHoliday: false,
        date: everyday(2, 22)
    },
    {
        name: "🇰🇷 삼일절",
        isHoliday: true,
        date: everyday(3, 1, true)
    },
    {
        name: "또 다른 시작",
        isHoliday: false,
        grades: [1, 2],
        date: {
            start: date(true, 3, 2, 8, 50),
            end: date(true, 3, 2, 15, 0)
        }
    },
    {
        name: "새로운 시작",
        isHoliday: false,
        grades: [3],
        date: {
            start: date(true, 3, 2, 8, 50),
            end: date(true, 3, 2, 15, 0)
        }
    },
    {
        name: "화이트 데이",
        isHoliday: false,
        date: everyday(3, 14)
    },
    {
        name: "블랙 데이",
        isHoliday: false,
        date: everyday(4, 14)
    },
    {
        name: "️🎗️ 4.16 세월호 참사",
        isHoliday: false,
        date: everyday(4, 16)
    },
    {
        name: "어린이날",
        isHoliday: true,
        date: everyday(5, 5)
    },
    {
        name: "현충일",
        isHoliday: true,
        date: everyday(6, 6)
    },
    {
        name: "🇰🇷 광복절",
        isHoliday: true,
        date: everyday(8, 15)
    },
    {
        name: "개천절",
        isHoliday: true,
        date: everyday(10, 3)
    },
    {
        name: "한글날",
        isHoliday: true,
        date: everyday(10, 9)
    },
    {
        name: "🎗️ 10.29 이태원 참사",
        isHoliday: false,
        date: everyday(10, 29)
    },
    {
        name: "핼러윈",
        isHoliday: false,
        date: everyday(10, 31)
    },
    {
        name: "빼빼로 데이",
        isHoliday: false,
        date: everyday(11, 11)
    },
    {
        name: "크리스마스",
        isHoliday: true,
        date: everyday(12, 25)
    },
    {
        name: "끝",
        isHoliday: false,
        date: {
            start: date(false, 12, 31, 23, 59, 59, 999),
            end: date(false, 12, 31, 23, 59, 59, 999)
        }
    }
];
export default anniversaries;
