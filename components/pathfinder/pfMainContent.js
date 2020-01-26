import dynamic from 'next/dynamic'

const DynamicMap = dynamic(
	() => import('./map'),
	{ ssr: false }
)

const PFSmallObject = () => {
	return (<>
		<div className="ctn">
			{/* <div className="image"> */}
				<img className="image" src="/objects/Swirg2_450_320.jpg"/>
			{/* </div> */}
			<div className="field">
				<div>
					<h1>Лагодів</h1>
					<h2>Церква святого Архангела Михаїла.</h2>
<p>
Невеличке село Лагодів на Львівщині має досить рідкісну дерев`яну церкву святого архангела Михаїла. Церква п`ятикупольна. Документи 1742 року свідчать, що збудована вона десятьма роками раніше на кошти священника й громади. 
</p>
				</div>
				<div className="more">
					Більше інформаціі V
				</div>
			</div>
		</div>
		<style jsx>{`
			.ctn {
				margin: 0 0 50px 0;
				text-align: center;
				//background-color: #ffff00;	
				width: 585px;
				//height: 700px;
			}
			.image {
				width: 550px;
				height: 400px;
				border-radius: 10px;
				box-shadow: 4px 10px 30px 0 var(--invalid-name);
				background-color: #d8d8d8;
			}
			.image img {
				//width=100%;
			}
			.field {
				//top: -20px;
				position: relative;
				margin: -10px 0 0 0;
				width: 100%;
				border-radius: 15px;
				box-shadow: 2px 10px 30px 0 rgba(9, 21, 85, 0.24);
				background-color: #ffffff;
			}
			.field p {
				padding: 20px 0 0 0;
				text-align: left;
				margin:  0px 20px;
				font-family: Montserrat;
				font-size: 17px;
				font-weight: normal;
				font-stretch: normal;
				font-style: normal;
				line-height: 1.53;
				letter-spacing: 0.79px;
				color: var(--texticonscolor);
			}
			.field h1 {
				margin: 0 0 0 0;
				padding: 25px 0 0 0;
				text-align: center;
				font-family: Montserrat;
				font-size: 32px;
				font-weight: 600;
				font-stretch: normal;
				font-style: normal;
				line-height: 0.81;
				letter-spacing: 1.5px;
				color: var(--texticonscolor);
			}
			.field h2 {
				margin: 0;
				padding: 15px 0 0 0;
				text-align: center;
				font-family: Montserrat;
				font-size: 20px;
				font-weight: 500;
				font-stretch: normal;
				font-style: normal;
				line-height: 1.3;
				letter-spacing: 0.94px;
				color: var(--texticonscolor);
			}
			.more {
				height: 80px;
				font-family: Montserrat;
				font-size: 17px;
				font-weight: 600;
				font-stretch: normal;
				font-style: normal;
				line-height: normal;
				letter-spacing: 0.79px;
				color: var(--primarycolor);

			}
		`}</style>
	</>)
}

const pfMainContent = () => {

	return (<>
		<div style={{ marginTop: "25px", display: 'flex' }}>

			<div style={{marginRight: "auto"}}>
				<PFSmallObject />
				<PFSmallObject />
			</div>
			<div className="map">
				<DynamicMap  />
			</div>
		</div>
		<style jsx>{`
		.map {
			position: sticky;

			top: 100px;
			width: 550px;
			height: 700px;
			overlap: hidden;
  		border-radius: 15px;
  		box-shadow: 2px 10px 30px 0 rgba(9, 21, 85, 0.24);
  		background-color: #ffffff;
		}
	
		`}</style>
	</>)

}

export default pfMainContent