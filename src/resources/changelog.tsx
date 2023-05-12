import * as pack from "../../package.json";

const versionInformation = {
    changelog: [
        {
            version: "1.0.0",
            date: "2022년 6월 7일 오후 6시 정각",
            content: ["디데이 사이트 첫 릴리스"]
        },
        {
            version: "1.0.1",
            date: "2022년 8월 14일 오후 11시 27분",
            content: ["디데이 날짜 계산 알고리즘 최적화"]
        },
        {
            version: "1.0.2",
            date: "2022년 9월 24일 오후 3시 09분",
            content: ["디데이 업데이트 및 최적화"]
        },
        {
            version: "1.0.3",
            date: "2022년 12월 9일 오후 12시 37분",
            content: ["홈 화면 개선, 디데이 업데이트 및 최적화"]
        },
        {
            version: "1.1.0",
            date: "2023년 3월 12일 오후 6시 45분",
            content: ["https://exam.alpha93.kro.kr/ 에서 https://dday.alpha93.kr/ 로 도메인 변경"]
        },
        {
            version: "1.2.0",
            date: "2023년 3월 30일 오전 12시 57분",
            content: ["모든 디데이를 2023년에 맞게 수정", "디데이 스타일 코드 최적화"]
        },
        {
            version: "2.0.0",
            date: "2023년 4월 20일 오전 1시 41분",
            content: [
                "디데이 사이트 리뉴얼",
                "지난 디데이 자동 제거 기능 추가",
                "밀리초 제거 (어차피 제대로 안보임)",
                "마진 오류 해결"
            ]
        },
        {
            version: "2.0.1",
            date: "2023년 4월 21일 오후 7시 29분",
            content: [
                "정보 페이지 업데이트",
                "정보 페이지에 개발자 프로필 추가",
                "업데이트 기록 추가",
                "Footer 최적화",
                "HOTFIX: 업데이트 기록 추가, 현재 버전 추가"
            ]
        },
        {
            version: "2.0.2",
            date: "2023년 4월 21일 오후 7시 43분",
            content: ["Footer에 버전 추가"]
        },
        {
            version: "2.0.3",
            date: "2023년 4월 21일 오후 9시 15분",
            content: ["메타데이터 추가"]
        },
        {
            version: "2.0.4",
            date: "2023년 4월 21일 오후 10시 58분",
            content: ["package.json 최적화", "코드 최적화"]
        },
        {
            version: "2.0.5",
            date: "2023년 4월 21일 오후 11시 11분",
            content: ["Prettier 도입"]
        },
        {
            version: "2.0.6",
            date: "2023년 4월 21일 오후 11시 21분",
            content: ["Prettier 구성 변경"]
        },
        {
            version: "2.0.7",
            date: "2023년 4월 22일 오전 12시 24분",
            content: [
                "일부 3학년 디데이가 1학년으로 설정되어 있는 오류 수정",
                "수능 디데이가 특수교육으로 지정되어 있던 문제 해결",
                "일반 디데이용 CSS값 추가"
            ]
        },
        {
            version: "2.0.8",
            date: "2023년 4월 22일 오전 2시 25분",
            content: ["코드 공개"]
        },
        {
            version: "2.0.9",
            date: "2023년 4월 22일 오전 2시 34분",
            content: ["깃헙 레포지토리 설명 개선"]
        },
        {
            version: "2.1.0",
            date: "2023년 4월 22일 오전 9시 15분",
            content: ["필터링 기능 추가"]
        },
        {
            version: "2.2.0",
            date: "2023년 4월 22일 오전 9시 52분",
            content: [
                "HOTFIX: 모바일에서 필터링 버튼이 이상한 위치에 표시되는 오류 해결",
                "새해까지 남은 날짜 진행바 추가"
            ]
        },
        {
            version: "2.2.1",
            date: "2023년 4월 22일 오전 9시 54분",
            content: ["HOTFIX: 업데이트 기록"]
        },
        {
            version: "2.3.0.0",
            date: "2023년 4월 22일 오전 9시 54분",
            content: ["상단 바 개선", "버전명 규칙 변경", "GitHub 브랜치 보안 강화", "종속성 업데이트"]
        },
        {
            version: "2.3.1.0",
            date: "2023년 5월 2일 오후 11시 24분",
            content: ["디데이 업데이트", "종속성 업데이트"]
        },
        {
            version: "2.3.1.1",
            date: "2023년 5월 5일 오전 8시 26분",
            content: ["디데이 업데이트", "종속성 업데이트", "종속성 확인 작업 추가"]
        },
        {
            version: "2.3.1.2",
            date: "2023년 5월 12일 오전 11시 45분",
            content: ["검색엔진 인덱싱 업데이트"]
        },
        {
            version: "2.3.1.3",
            date: "2023년 5월 12일 오전 11시 45분",
            content: ["구글 애널리틱스 적용", "네이버 애널리틱스 적용", "HOTFIX: 패키지 버전 업데이트"]
        }
    ].reverse(),
    version: pack.version
};

export default versionInformation;
