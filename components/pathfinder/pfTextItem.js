
import PathfinderSlider from '../mainPage/pathfinderSlider'

const PFTextItem = ({  text, images, direct }) => {
	const flexDirection = direct ? "row" : "row-reverse"
	const textMarginStyle = direct ? 'margin-left: 45px' : 'margin-right: 45px'
	//console.log(text)
	return (<>
		<article>
			<div className="image-list">
				<PathfinderSlider images={images} />
			</div>
			<div style={{ flex: "auto", overflow: "hidden" }}>
				<div className="pathfinder-object-text" >
					<p dangerouslySetInnerHTML={{ __html: text }} />
				</div>
			</div>
		</article>
		<style jsx>{`
      article {
        padding-top: 80px;
        display: flex;
        flex-direction: ${flexDirection};
        flex-wrap: nowrap;
        width: 100%;
        min-height: 360px;
      }

      .pathfinder-object-text {
        text-align: justify;
        ${ direct ? 'margin-left: 105px' : 'margin-right: 105px'};
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.50;
        letter-spacing: 0.79px;
        color: #061434;
      }
      @media only screen and (max-width: 1165px) {
         .pathfinder-object-text {
          font-size: 16px;
         }
      }
      @media only screen and (max-width: 1023px) {
        article {
          width: 343px;
          padding-top: 30px;
          margins-left: auto;
          flex-wrap: wrap;
          height: inherit;
        }
        .pathfinder-object-text {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.65px;
          margin-right: auto;
          margin-left: auto;
				}
      }
      `}
		</style>
	</>)
}

export default PFTextItem;

