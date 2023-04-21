import CalculateRemain from "@/components/ddayRenderer";

const { DateTime } = require("luxon");

export default function buildDday(
    name: string,
    type: number,
    affectGrade: [boolean, boolean, boolean],
    date: typeof DateTime
) {
    let processedType = "";
    switch (type) {
        case -2:
            processedType = "disaster";
            break;
        case -1:
            processedType = "default";
            break;
        case 0:
            processedType = "exam";
            break;
        case 1:
            processedType = "holiday";
            break;
        case 2:
            processedType = "event";
            break;
        case 3:
            processedType = "special";
            break;
        default:
            throw TypeError("Invalid type: " + type);
    }

    return (
        <div className={"dday-box"}>
            <div className={"name"}>{name}</div>
            <div className={"content " + processedType}>
                <div className={"affect-grade " + processedType}>
                    <div className={(affectGrade[0] ? "" : "un") + "affect a " + processedType}>1학년</div>
                    <hr className={(affectGrade[0] && affectGrade[1] ? "" : "un") + "affect-hr " + processedType} />
                    <div className={(affectGrade[1] ? "" : "un") + "affect b " + processedType}>2학년</div>
                    <hr className={(affectGrade[1] && affectGrade[2] ? "" : "un") + "affect-hr " + processedType} />
                    <div className={(affectGrade[2] ? "" : "un") + "affect c " + processedType}>3학년</div>
                </div>
                <CalculateRemain date={date.toMillis()} />
            </div>
        </div>
    );
}
