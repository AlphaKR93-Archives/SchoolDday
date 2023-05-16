export default async function RiverTemperatureCheckPage() {
	const response = await fetch(
		"http://openapi.seoul.go.kr:8088/7565624364616c703739686b575171/json/WPOSInformationTime/1/5/"
	);
	if (!response.ok) return null;
	const data = (await response.json()).WPOSInformationTime.row;
	
    return (
		<main>
			<section className="box_section">
				<span className="title">
					<h1>한강 물온도</h1>
					<hr />
				</span>
				<div className="content">
					{data.map(content => {
						return (
							<div className="inner_section !p-3 !mt-3">
								<p>{content.SITE_ID}</p>
								<div className="progress">
									<div className="passed" style={{ width: content.W_TEMP !== "점검중" ? `${((Number(content.W_TEMP) - 10) * 100 / 20)}%` : "0%" }} />
								</div>
								<p>{content.W_TEMP !== "점검중" ? `${content.W_TEMP}°C` : "점검중"}</p>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
}
