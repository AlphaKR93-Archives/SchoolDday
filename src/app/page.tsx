import RemainBox from "@/components/assets/remains/remain-box";
import Sidebar from "@/components/assets/sidebar/sidebar";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <RemainBox />
            <section className={styles.main}>
                <Sidebar />
                test
            </section>
        </main>
    );
}
