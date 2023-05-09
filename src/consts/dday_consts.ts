import { DdayType } from "@/components/assets/dday_box/components/tags/type/type.component";
import dayjs from "dayjs";

function date(year: number, month: number, day: number, hour: number, minute: number) {
    return dayjs(
        `${year.toString().padStart(4, "0")}-${month.toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}T${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:00.000+09:00`
    );
}

export type DdayConstsType = {
    name: string;
    type: DdayType;
    grades: null | number[];
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
}[];

const ddays: DdayConstsType = [
    {
        name: "5월 버스킹",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(2023, 5, 17, 12, 20),
            end: date(2023, 5, 17, 13, 10)
        }
    },
    {
        name: "부처님 오신날",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(2023, 5, 27, 0, 0),
            end: date(2023, 5, 30, 0, 0)
        }
    },
    {
        name: "진로캠프",
        type: DdayType.EVENT,
        grades: [1],
        date: {
            start: date(2023, 5, 31, 8, 30),
            end: date(2023, 6, 2, 18, 0)
        }
    },
    {
        name: "수학여행",
        type: DdayType.EVENT,
        grades: [2],
        date: {
            start: date(2023, 5, 31, 8, 30),
            end: date(2023, 6, 2, 18, 0)
        }
    },
    {
        name: "수련회",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(2023, 5, 31, 8, 30),
            end: date(2023, 6, 2, 18, 0)
        }
    },
    {
        name: "재량휴업일 ~ 현충일",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(2023, 6, 3, 0, 0),
            end: date(2023, 6, 7, 0, 0)
        }
    },
    {
        name: "1학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [2, 3],
        date: {
            start: date(2023, 6, 26, 8, 50),
            end: date(2023, 6, 28, 12, 10)
        }
    },
    {
        name: "선비교육",
        type: DdayType.MISCELLANEOUS,
        grades: [1],
        date: {
            start: date(2023, 6, 26, 8, 50),
            end: date(2023, 6, 26, 15, 0)
        }
    },
    {
        name: "방학식",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(2023, 7, 20, 8, 50),
            end: date(2023, 7, 20, 12, 20)
        }
    },
    {
        name: "방학",
        type: DdayType.HOLIDAY,
        grades: [1, 2, 3],
        date: {
            start: date(2023, 7, 20, 12, 20),
            end: date(2023, 8, 16, 0, 0)
        }
    },
    {
        name: "광복절",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(2023, 8, 15, 0, 0),
            end: date(2023, 8, 15, 0, 0)
        }
    },
    {
        name: "개학식",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(2023, 8, 16, 8, 50),
            end: date(2023, 8, 16, 15, 0)
        }
    },
    {
        name: "2학기 1차고사",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(2023, 9, 21, 8, 50),
            end: date(2023, 9, 22, 12, 10)
        }
    },
    {
        name: "추석 ~ 개천절",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(2023, 9, 28, 0, 0),
            end: date(2023, 10, 4, 0, 0)
        }
    },
    {
        name: "한글날",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(2023, 10, 9, 0, 0),
            end: date(2023, 10, 10, 0, 0)
        }
    },
    {
        name: "🎗️ 10.29 이태원 참사",
        type: DdayType.MISCELLANEOUS,
        grades: null,
        date: {
            start: date(2023, 10, 29, 0, 0),
            end: date(2023, 10, 30, 0, 0)
        }
    },
    {
        name: "2학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [3],
        date: {
            start: date(2023, 10, 30, 8, 50),
            end: date(2023, 11, 1, 12, 10)
        }
    },
    {
        name: "대학수학능력시험",
        type: DdayType.MISCELLANEOUS,
        grades: null,
        date: {
            start: date(2023, 11, 16, 8, 10),
            end: date(2023, 11, 16, 17, 45)
        }
    },
    {
        name: "진로체험",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(2023, 11, 22, 8, 50),
            end: date(2023, 11, 22, 15, 0)
        }
    },
    {
        name: "2학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [1, 2],
        date: {
            start: date(2023, 12, 4, 8, 50),
            end: date(2023, 12, 6, 12, 10)
        }
    },
    {
        name: "석동 축제",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(2023, 12, 22, 8, 50),
            end: date(2023, 12, 22, 15, 0)
        }
    },
    {
        name: "성탄절",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(2023, 12, 25, 0, 0),
            end: date(2023, 12, 26, 0, 0)
        }
    },
    {
        name: "새해",
        type: DdayType.HOLIDAY,
        grades: null,
        date: {
            start: date(2024, 1, 1, 0, 0),
            end: date(2024, 1, 2, 0, 0)
        }
    },
    {
        name: "종업식",
        type: DdayType.EVENT,
        grades: [1, 2],
        date: {
            start: date(2024, 1, 5, 8, 50),
            end: date(2024, 1, 5, 12, 20)
        }
    },
    {
        name: "졸업식",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(2024, 1, 5, 8, 50),
            end: date(2024, 1, 5, 12, 20)
        }
    },
    {
        name: "또 다른 시작",
        type: DdayType.EVENT,
        grades: [1, 2],
        date: {
            start: date(2024, 3, 2, 8, 50),
            end: date(2024, 3, 2, 15, 0)
        }
    },
    {
        name: "새로운 시작",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(2024, 3, 2, 8, 50),
            end: date(2024, 3, 2, 15, 0)
        }
    }
];
export default ddays;
