import TypeSection from "@/components/main/sidebar/type_section";
import GradeSection from "@/components/main/sidebar/grade_section";
import SemesterSection from "@/components/main/sidebar/semester_section";
import OptionsSection from "@/components/main/sidebar/options";
import AmountSection from "@/components/main/sidebar/amount_section";
import ButtonSection from "@/components/main/sidebar/button_section";
import styles from "./sidebar.module.css";

export default function Sidebar(props: { button: boolean }) {
    const { button } = props;

    return (
        <ul className={styles.sidebar}>
            {button ? <ButtonSection /> : null}
            <AmountSection />
            <OptionsSection />
            <TypeSection />
            <GradeSection />
            <SemesterSection />
        </ul>
    );
}
