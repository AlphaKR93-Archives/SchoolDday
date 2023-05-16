export default async function RiverTemperatureCheckPage() {
    const response = await fetch(
        "http://openapi.seoul.go.kr:8088/7565624364616c703739686b575171/json/WPOSInformationTime/1/5/"
    );
    if (response.ok) data = response.json();

    return <main>{data}</main>;
}
