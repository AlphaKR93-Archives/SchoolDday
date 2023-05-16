import { DdayType } from "@/components/modules/dday_box/components/tags/type/type.component";
import dayjs from "dayjs";
import anniversaries from "@/consts/dday/anniversary_consts";
import birthdays from "@/consts/dday/birthday_consts/birthday_consts";
import { getCookie } from "cookies-next";
import { date, everyday, fromEnd } from "./builder";

type ddayListType = {
    name: string;
    type: DdayType;
    grades?: number[];
    date: {
        start: dayjs.Dayjs;
        end: dayjs.Dayjs;
    };
}[];

const ddays: ddayListType = [
    {
        name: "5월 버스킹",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(false, 5, 17, 12, 20),
            end: date(false, 5, 17, 13, 10)
        }
    },
    {
        name: "부처님 오신날",
        type: DdayType.HOLIDAY,
        date: fromEnd({ month: 5, day: 27 }, { month: 5, day: 29 })
    },
    {
        name: "진로캠프",
        type: DdayType.EVENT,
        grades: [1],
        date: {
            start: date(false, 5, 31, 8, 30),
            end: date(false, 6, 2, 18, 0)
        }
    },
    {
        name: "수학여행",
        type: DdayType.EVENT,
        grades: [2],
        date: {
            start: date(false, 5, 31, 8, 30),
            end: date(false, 6, 2, 18, 0)
        }
    },
    {
        name: "수련회",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(false, 5, 31, 8, 30),
            end: date(false, 6, 2, 18, 0)
        }
    },
    {
        name: "재량휴업일",
        type: DdayType.HOLIDAY,
        date: fromEnd({ month: 6, day: 3 }, { month: 6, day: 5 })
    },
    {
        name: "석동중 디데이 1주년",
        type: DdayType.EVENT,
        date: {
            start: date(false, 6, 7, 18, 0),
            end: date(false, 6, 7, 18, 0)
        }
    },
    {
        name: "1학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [2, 3],
        date: {
            start: date(false, 6, 26, 8, 50),
            end: date(false, 6, 28, 12, 10)
        }
    },
    {
        name: "선비교육",
        type: DdayType.MISCELLANEOUS,
        grades: [1],
        date: {
            start: date(false, 6, 26, 8, 50),
            end: date(false, 6, 26, 15, 0)
        }
    },
    {
        name: "방학식",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(false, 7, 20, 8, 50),
            end: date(false, 7, 20, 12, 20)
        }
    },
    {
        name: "방학",
        type: DdayType.HOLIDAY,
        grades: [1, 2, 3],
        date: {
            start: date(false, 7, 20, 12, 20),
            end: date(false, 8, 16, 8, 50)
        }
    },
    {
        name: "개학식",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(false, 8, 16, 8, 50),
            end: date(false, 8, 16, 15, 0)
        }
    },
    {
        name: "2학기 1차고사",
        type: DdayType.EXAMINATION,
        grades: [1, 2, 3],
        date: {
            start: date(false, 9, 21, 8, 50),
            end: date(false, 9, 22, 12, 10)
        }
    },
    {
        name: "추석",
        type: DdayType.HOLIDAY,
        date: fromEnd({ month: 9, day: 28 }, { month: 10, day: 3 })
    },
    {
        name: "2학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [3],
        date: {
            start: date(false, 10, 30, 8, 50),
            end: date(false, 11, 1, 12, 10)
        }
    },
    {
        name: "대학수학능력시험",
        type: DdayType.MISCELLANEOUS,
        date: {
            start: date(false, 11, 16, 8, 10),
            end: date(false, 11, 16, 17, 45)
        }
    },
    {
        name: "진로체험",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(false, 11, 22, 8, 50),
            end: date(false, 11, 22, 15, 0)
        }
    },
    {
        name: "2학기 2차고사",
        type: DdayType.EXAMINATION,
        grades: [1, 2],
        date: {
            start: date(false, 12, 4, 8, 50),
            end: date(false, 12, 6, 12, 10)
        }
    },
    {
        name: "석동 축제",
        type: DdayType.EVENT,
        grades: [1, 2, 3],
        date: {
            start: date(false, 12, 22, 8, 50),
            end: date(false, 12, 22, 15, 0)
        }
    },
    {
        name: "종업식",
        type: DdayType.EVENT,
        grades: [1, 2],
        date: {
            start: date(false, 1, 5, 8, 50),
            end: date(false, 1, 5, 12, 20)
        }
    },
    {
        name: "졸업식",
        type: DdayType.EVENT,
        grades: [3],
        date: {
            start: date(false, 1, 5, 8, 50),
            end: date(false, 1, 5, 12, 20)
        }
    }
];

export default function buildDdayList() {
    const returnValue: ddayListType = [];

    ddays.forEach(dday => returnValue.push(dday));
    anniversaries.forEach(anniversary =>
        returnValue.push({
            name: anniversary.name,
            type: anniversary.isHoliday ? DdayType.HOLIDAY : DdayType.MISCELLANEOUS,
            grades: anniversary.grades,
            date: anniversary.date
        })
    );
    birthdays.forEach(birthdayList => {
        birthdayList.list.forEach(birthday =>
            returnValue.push({
                name: `${birthday.name}의 생일`,
                type: DdayType.BIRTHDAY,
                grades: [birthdayList.grade],
                date: birthday.date
            })
        );
    });
    if (getCookie("rohunji") === "yeah")
        returnValue.push({
            name: "중력절",
            type: DdayType.MISCELLANEOUS,
            date: everyday(5, 23)
        });

    return returnValue.sort((a, b) => a.date.start.valueOf() - b.date.start.valueOf());
}
