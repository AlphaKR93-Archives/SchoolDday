import RemainBox from "@/components/modules/remains/remain-box";
import Sidebar from "@/components/main/sidebar/sidebar";
import FilteredDdayValues from "@/components/main/content/index/dday_grid/dday_grid.component";
import EOLNotification from "@/components/main/notification/eol";
import styles from "./page.module.css";

export default function IndexPage() {
    return (
        <main>
            <RemainBox />
            <EOLNotification />
            <section className={styles.main}>
                <Sidebar button />
                <FilteredDdayValues />
            </section>
        </main>
    );
}
