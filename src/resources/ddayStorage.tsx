const { DateTime } = require("luxon");

/**
 * -2: 참사 dark, -1: 기타 default, 0: 고사 red, 1: 휴교 green, 2: 행사 blue, 3: 특수교육 yellow
 */
const ddays = [
    ["1학기 1차고사", 0, [false, true, true], DateTime.local(2023, 4, 27, 8, 50), DateTime.local(2023, 4, 28, 12, 10)],
    ["개교기념일", 1, [true, true, true], DateTime.local(2023, 5, 1), null],
    ["스포츠클럽행사", 2, [true, true, true], DateTime.local(2023, 5, 4, 8, 50), null],
    ["5월 버스킹", 2, [true, true, true], DateTime.local(2023, 5, 3, 12, 20), null],
    ["어린이날", 1, [true, true, true], DateTime.local(2023, 5, 5), null],
    ["대체공휴일", 1, [true, true, true], DateTime.local(2023, 5, 29), null],
    ["진로캠프", 2, [true, false, false], DateTime.local(2023, 5, 31, 8, 30), DateTime.local(2023, 6, 2)],
    ["수학여행", 2, [false, true, false], DateTime.local(2023, 5, 31, 8, 30), DateTime.local(2023, 6, 2)],
    ["수련회", 2, [false, false, true], DateTime.local(2023, 5, 31, 8, 30), DateTime.local(2023, 6, 2)],
    ["재량휴업일 ~ 현충일", 1, [true, true, true], DateTime.local(2023, 6, 5), DateTime.local(2023, 6, 6)],
    ["1학기 2차고사", 0, [false, true, true], DateTime.local(2023, 6, 26, 8, 50), DateTime.local(2023, 6, 28, 12, 10)],
    ["선비교육", 3, [true, false, false], DateTime.local(2023, 6, 26, 8, 50), null],
    ["방학식", 2, [true, true, true], DateTime.local(2023, 7, 20, 8, 50), DateTime.local(2023, 8, 16, 8, 50)],
    ["🇰🇷 광복절", 1, [true, true, true], DateTime.local(2023, 8, 15), null],
    ["개학식", 3, [true, true, true], DateTime.local(2023, 8, 16, 8, 50), null],
    ["2학기 1차고사", 0, [true, true, true], DateTime.local(2023, 9, 21, 8, 50), DateTime.local(2023, 9, 22, 12, 10)],
    ["추석, 재량휴업일, 개천절", 1, [true, true, true], DateTime.local(2023, 9, 28), DateTime.local(2023, 10, 3)],
    ["한글날", 1, [true, true, true], DateTime.local(2023, 10, 9), null],
    ["🎗️ 10.29 이태원 참사", -2, [false, false, false], DateTime.local(2023, 10, 29), null],
    ["2학기 2차고사", 0, [false, false, true], DateTime.local(2023, 10, 30, 8, 50), DateTime.local(2023, 11, 1, 12, 10)],
    ["대학수학능력시험", -1, [true, true, true], DateTime.local(2023, 11, 16), null],
    ["진로체험", 3, [false, false, true], DateTime.local(2023, 11, 22), null],
    ["2학기 2차고사", 0, [true, true, false], DateTime.local(2023, 12, 4, 8, 50), DateTime.local(2023, 12, 6, 12, 10)],
    ["석동 축제", 2, [true, true, true], DateTime.local(2023, 12, 22, 8, 50), null],
    ["성탄절", 1, [true, true, true], DateTime.local(2023, 12, 25), null],
    ["새해", 1, [true, true, true], DateTime.local(2024, 1, 1), null],
    ["종업식", 2, [true, true, false], DateTime.local(2024, 1, 5, 8, 50), null],
    ["졸업식", 2, [false, false, true], DateTime.local(2024, 1, 5, 8, 50), null],
    ["또 다른 시작", 3, [true, true, true], DateTime.local(2024, 3, 1, 8, 50), null]
];
export default ddays;
