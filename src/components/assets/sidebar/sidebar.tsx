import TypeSection from "@/components/assets/sidebar/type_section";
import GradeSection from "@/components/assets/sidebar/grade_section";
import SemesterSection from "@/components/assets/sidebar/semester_section";
import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <ul className={styles.sidebar}>
            <TypeSection />
            <GradeSection />
            <SemesterSection />
        </ul>
    );
}
