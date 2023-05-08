import RemainBox from "@/components/assets/remains/remain-box";
import Sidebar from "@/components/assets/sidebar/sidebar";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <RemainBox />
            <section className={styles.main}>
                <Sidebar />
                <div className={styles.content}>여긴어디 나는누구</div>
            </section>
        </main>
    );
}
