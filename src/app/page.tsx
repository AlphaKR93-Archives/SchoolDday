import buildDday from "@/components/buildDday";
import ddays from "@/resources/ddayStorage";

const { DateTime } = require("luxon");

export default function Home() {
    return (
        <div className={"font-escore"}>
            <div className={"mx-auto w-min"}>
                {ddays.map(dday => {
                    if (dday[3] > DateTime.now()) {
                        return buildDday(dday[0], dday[1], dday[2], dday[3]);
                    }
                })}
            </div>
        </div>
    );
}
