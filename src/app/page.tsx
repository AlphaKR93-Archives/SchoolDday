import RemainBox from "@/components/assets/remains/remain-box";
import Sidebar from "@/components/assets/sidebar/sidebar";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <RemainBox />
            <section className="mt-16 flex h-full">
                <Sidebar />
                test
            </section>
        </main>
    );
}
