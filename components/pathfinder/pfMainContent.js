import dynamic from 'next/dynamic'
import { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import VisibilitySensor from 'react-visibility-sensor'
const DynamicMap = dynamic(
  () => import('./map'),
  { ssr: false }
)

const PFSmallObject = ({ object, last }) => {
  const [details, showDetails] = useState(false)
  return (<>
    <div className="ctn">
      {/* <div className="image"> */}
      <img className="image" src="/objects/Swirg2_450_320.jpg" />
      {/* </div> */}
      <div className="field">
        <div>
          <h1>Лагодів</h1>
          <h2>Церква святого Архангела Михаїла.</h2>
          <p>
            Невеличке село Лагодів на Львівщині має досить рідкісну дерев`яну церкву святого архангела Михаїла. Церква п`ятикупольна. Документи 1742 року свідчать, що збудована вона десятьма роками раніше на кошти священника й громади.
          </p>
        </div>
        {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}
        {details && <div>
          <div>
            <img className="image" src="/objects/Swirg2_450_320.jpg" />
            <div>
              <p>
                Невеличке село Лагодів на Львівщині має досить рідкісну дерев`яну церкву святого архангела Михаїла. Церква п`ятикупольна. Документи 1742 року свідчать, що збудована вона десятьма роками раніше на кошти священника й громади.
              </p>
            </div>
          </div>
        </div>}
        {/* </ReactCSSTransitionGroup> */}
        <div className="more">
          <a onClick={() => showDetails(!details)}
            style={{ top: "35px", position: "relative" }}>{details ? "Згорнути" : "Більше інформаціі"}
            <img style={{ top: "2px", height: "16px", width: "15px", position: "relative" }}
              src={details ? "/img/arrow-up.svg" : "/img/arrow-down.svg"} />
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`


      .ctn {
        margin: 0 0 ${last ? 0: 50}px 0;
        text-align: center;
        width: 585px;
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
      }
      .more a {
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.79px;
        color: var(--primarycolor);
      }
      .more a:link {
        text-decoration: none;
        color: #061434;
      }
    `}</style>
  </>)
}
const smallObjects = [
  {
    id: 1,
    type: 'building',
    location: {lat: 49.719827, lng: 24.503354}
  },
  {
    id: 2,
    type: 'building',
    location: {lat: 49.729227, lng: 24.513854}
  },
  {
    id: 3,
    type: 'building',
    location: {lat: 49.729427, lng: 24.523254}
  },
]
const pfMainContent = () => {
  const [selected, setSelected] = useState(smallObjects[0])
  return (<>
    <div className="content">

      <div style={{ marginRight: "auto" }}>
      {smallObjects.map( (object, index)=>
        <VisibilitySensor key={object.id} scrollCheck="true" onChange={ isVisible => isVisible && setSelected(object)}>
          <PFSmallObject  object={object} last={index == smallObjects.length - 1} />
        </VisibilitySensor>
      )}
      </div>
      <div className="map">
        <DynamicMap
        selected={selected}
        objects={smallObjects}
        select={setSelected}
        />
      </div>
    </div>
    <style jsx>{`
    .content {
      margin-top: 25px;
      display: flex;
      margin-bottom: 50px;
    }
    .map {
      position: sticky;

      top: 100px;
      width: 550px;
      height: 700px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 2px 10px 30px 0 rgba(9, 21, 85, 0.24);
      background-color: #ffffff;
    }

    `}</style>
  </>)

}

export default pfMainContent