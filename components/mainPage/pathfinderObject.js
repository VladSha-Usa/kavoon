import PathfinderSlider from './pathfinderSlider'

const PathfinderObject = ({object, direct }) => {
  const flexDirection = direct ? "row" : "row-reverse"
  const textMarginStyle = direct ? 'margin-left: 45px' : 'margin-right: 45px'

  return (<>
    <article>
      <p className="title small" dangerouslySetInnerHTML={{ __html: object.title }} />
      <div className="image-list">
        <PathfinderSlider images={object.galleryImages}/>
      </div>
      <div style={{ flex: "auto", overflow: "hidden" }}>

        <div className="pathfinder-object-text" >
          <p className="title large" dangerouslySetInnerHTML={{ __html: object.title}}/>
          <p dangerouslySetInnerHTML={{ __html: object.description}}/>
        </div>
      </div>
    </article>
    <style jsx>{`
     .pathfinder-image-gallery {
        width: 450px;
        height: 320px;
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 4px 10px 30px 0 rgba(9, 21, 85, 0.18);
      }
      .pathfinder-image {
        width: 450px;
        height: 320px;
        object-fit: cover;
        overflow: hidden;
      }
  
      @media only screen and (max-width: 1023px) {
        .pathfinder-image-gallery {
          width: 335px;
          height: 280px;
        }
       .pathfinder-image {
          width: 335px;
          height: 280px;
        }
      }
      .switcher {
        margin-top: 15px;
        height: 15px;
      }
      .small {
        display: none;
      }
      article {
        padding-top: 80px;
        display: flex;
        flex-direction: ${flexDirection};
        flex-wrap: nowrap;
        width: 100%;
        min-height: 360px;
      }
      .image-list {
        text-align: center;
        flex: 0 0 450px;
        height: 100%;
      }
      .title  {
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: 1.5px;
        color: var(--primarycolor);
        margin: 5px;
      }
    
      .pathfinder-object-text {
        text-align: justify;
        ${ direct ? 'margin-left: 105px' : 'margin-right: 105px' };
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
        .image-list {
          flex: auto;
          margins-left: auto;
        }
        .image {
          width: 335px;
          height: 280px;
          object-fill: contain;
          border-radius: 25px;
          box-shadow: 4px 10px 30px 0 rgba(9, 21, 85, 0.18);
        }
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
        .title {
          width: 100%;
          text-align: center;
          font-size: 20px;
          //margin-top: 20px;
          margin-bottom: 20px;
          font-weight: 500;
          color: var(--texticonscolor);
        }
        .small {
          display: block;
        }
        .large {
          display: none;
        }
      }
      `}
    </style>
  </>)
}

export default PathfinderObject