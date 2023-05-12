import TypeSection from "@/components/assets/sidebar/type_section";
import GradeSection from "@/components/assets/sidebar/grade_section";
import SemesterSection from "@/components/assets/sidebar/semester_section";
import OptionsSection from "@/components/assets/sidebar/options";
import AmountSection from "@/components/assets/sidebar/amount_section";
import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <ul className={styles.sidebar}>
            <AmountSection />
            <OptionsSection />
            <TypeSection />
            <GradeSection />
            <SemesterSection />
        </ul>
    );
}
