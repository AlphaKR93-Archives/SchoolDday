import RemainBox from "@/components/modules/remains/remain-box";
import IndexNotification from "@/components/main/notification/index";
import Sidebar from "@/components/main/sidebar/sidebar";
import FilteredDdayValues from "@/components/main/content/index/dday_grid/dday_grid.component";
import styles from "./page.module.css";

export default function IndexPage() {
    return (
        <main>
            <RemainBox />
            <IndexNotification />
            <section className={styles.main}>
                <Sidebar button />
                <FilteredDdayValues />
            </section>
        </main>
    );
}
