import TypeSection from "@/components/assets/sidebar/type_section";
import GradeSection from "@/components/assets/sidebar/grade_section";
import SemesterSection from "@/components/assets/sidebar/semester_section";
import OptionsSection from "@/components/assets/sidebar/options";
import AmountSection from "@/components/assets/sidebar/amount_section";
import ButtonSection from "@/components/assets/sidebar/button_section";
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
