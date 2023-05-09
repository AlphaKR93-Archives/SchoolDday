export default function TypeSection(props: { type: DdayType }) {
    const { type } = props;
    return <div />;
}

export enum DdayType {
    MISCELLANEOUS = -1,
    EXAM = 0,
    HOLIDAY = 1,
    EVENT = 2,
    BIRTHDAY = 3
}
