import styles from "./index.module.css";

export default function EOLNotification() {
    return (
        <div className={styles.support}>
            <div>
                본 프로젝트는 2024년 1월 5일 서비스를 종료할 예정입니다. 자세한 내용은 소스 코드를 클릭하여
                확인해주세요.
            </div>
        </div>
    );
}
