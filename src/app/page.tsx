import RemainBox from "@/components/assets/remains/remain-box";
import Sidebar from "@/components/assets/sidebar/sidebar";
import FilteredDdayValues from "@/components/assets/main_content/dday_grids";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <RemainBox />
            <section className={styles.main}>
                <Sidebar />
                <FilteredDdayValues />
            </section>
        </main>
    );
}
