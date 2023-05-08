import styles from "./errorpages.module.css";

export default function NotFound() {
    return (
        <main>
            <div className={styles.not_found}>
                <span className="text-5xl font-bold italic">Oops!</span>
                <span className="mt-4 text-xl">404 | Page not found</span>
                <hr className="mt-6 w-full bg-gray-400" />
                <span className="mt-6">이 페이지에 도달할 수 없습니다.</span>
                <span className="mt-1">페이지가 존재하지 않거나, 파일이 고장났을 수 있습니다.</span>
                <span className="mt-6">
                    <a href="/" className="rounded-xl bg-black p-5 font-bold text-white">
                        메인 페이지로 이동
                    </a>
                </span>
            </div>
        </main>
    );
}
