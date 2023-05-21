import styles from "./errorpages.module.css";

export default function NotFound() {
    return (
        <main>
            <div className={styles.not_found}>
                <span className="text-5xl font-bold italic">Oops!</span>
                <span className="mt-4 text-xl">404 | Dynamic Routing failure!</span>
                <hr className="bg-sec mt-6 w-full" />
                <span className="mt-6">예상치 못한 오류가 발생하였습니다.</span>
                <span className="mt-1">계속해서 오류가 발생할 경우 관리자에게 문의하시기 바랍니다.</span>
                <span className="mt-6">
                    <a href="/" className="bg-hg text-hg rounded-xl p-5 font-bold">
                        메인 페이지로 이동
                    </a>
                </span>
            </div>
        </main>
    );
}
