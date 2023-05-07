import TypeSection from "@/components/assets/sidebar/type_section/type_section";
import GradeSection from "@/components/assets/sidebar/grade_section/grade_section";
import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <ul className={styles.sidebar}>
            <TypeSection />
            <GradeSection />
        </ul>
    );
}
