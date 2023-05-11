import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";
import dayjs from "dayjs";

export function date(month: number, day: number, hour = 0, minute = 0) {
    const returnValue = dayjs(
        `${dayjs().year()}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}T${hour
            .toString()
            .padStart(2, "0")}:${minute.toString().padStart(2, "0")}:00.000+09:00`
    );
    if (returnValue < dayjs()) returnValue.add(1, "year");
    return returnValue;
}

export function everyday(month: number, day: number) {
    return {
        start: date(month, day, 0, 0),
        end: date(month, day, 23, 59)
    };
}

const ddays: {
    name: string;
    type: DdayType;
    grades: null | number[];
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
}[] = [
    {
        name: "5월 버스킹",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(5, 17, 12, 20),
            end: date(5, 17, 13, 10)
        }
    },
    {
        name: "부처님 오신날",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(5, 27, 0, 0),
            end: date(5, 30, 0, 0)
        }
    },
    {
        name: "진로캠프",
        type: DdayType.EVENT,
        grades: [1],
        date: {
            start: date(5, 31, 8, 30),
            end: date(6, 2, 18, 0)
        }
    },
    {
        name: "수학여행",
        type: DdayType.EVENT,
        grades: [2],
        date: {
            start: date(5, 31, 8, 30),
            end: date(6, 2, 18, 0)
        }
    },
    {
        name: "수련회",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(5, 31, 8, 30),
            end: date(6, 2, 18, 0)
        }
    },
    {
        name: "재량휴업일 ~ 현충일",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(6, 3, 0, 0),
            end: date(6, 7, 0, 0)
        }
    },
    {
        name: "1학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [2, 3],
        date: {
            start: date(6, 26, 8, 50),
            end: date(6, 28, 12, 10)
        }
    },
    {
        name: "선비교육",
        type: DdayType.MISCELLANEOUS,
        grades: [1],
        date: {
            start: date(6, 26, 8, 50),
            end: date(6, 26, 15, 0)
        }
    },
    {
        name: "방학식",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(7, 20, 8, 50),
            end: date(7, 20, 12, 20)
        }
    },
    {
        name: "방학",
        type: DdayType.HOLIDAY,
        grades: [1, 2, 3],
        date: {
            start: date(7, 20, 12, 20),
            end: date(8, 16, 0, 0)
        }
    },
    {
        name: "광복절",
        type: DdayType.HOLIDAY,
        grades: null,
        date: everyday(8, 15)
    },
    {
        name: "개학식",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(8, 16, 8, 50),
            end: date(8, 16, 15, 0)
        }
    },
    {
        name: "2학기 1차고사",
        type: DdayType.EXAMINATION,
        grades: [1, 2, 3],
        date: {
            start: date(9, 21, 8, 50),
            end: date(9, 22, 12, 10)
        }
    },
    {
        name: "추석 ~ 개천절",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(9, 28, 0, 0),
            end: date(10, 4, 0, 0)
        }
    },
    {
        name: "한글날",
        type: DdayType.HOLIDAY,
        grades: null,
        date: everyday(10, 9)
    },
    {
        name: "🎗️ 10.29 이태원 참사",
        type: DdayType.MISCELLANEOUS,
        grades: null,
        date: everyday(10, 29)
    },
    {
        name: "2학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [3],
        date: {
            start: date(10, 30, 8, 50),
            end: date(11, 1, 12, 10)
        }
    },
    {
        name: "대학수학능력시험",
        type: DdayType.MISCELLANEOUS,
        grades: null,
        date: {
            start: date(11, 16, 8, 10),
            end: date(11, 16, 17, 45)
        }
    },
    {
        name: "진로체험",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(11, 22, 8, 50),
            end: date(11, 22, 15, 0)
        }
    },
    {
        name: "2학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [1, 2],
        date: {
            start: date(12, 4, 8, 50),
            end: date(12, 6, 12, 10)
        }
    },
    {
        name: "석동 축제",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(12, 22, 8, 50),
            end: date(12, 22, 15, 0)
        }
    },
    {
        name: "성탄절",
        type: DdayType.HOLIDAY,
        grades: null,
        date: everyday(12, 25)
    },
    {
        name: "새해",
        type: DdayType.HOLIDAY,
        grades: null,
        date: everyday(1, 1)
    },
    {
        name: "종업식",
        type: DdayType.EVENT,
        grades: [1, 2],
        date: {
            start: date(1, 5, 8, 50),
            end: date(1, 5, 12, 20)
        }
    },
    {
        name: "졸업식",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(1, 5, 8, 50),
            end: date(1, 5, 12, 20)
        }
    },
    {
        name: "또 다른 시작",
        type: DdayType.EVENT,
        grades: [1, 2],
        date: {
            start: date(3, 2, 8, 50),
            end: date(3, 2, 15, 0)
        }
    },
    {
        name: "새로운 시작",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(3, 2, 8, 50),
            end: date(3, 2, 15, 0)
        }
    }
];
export default ddays;
