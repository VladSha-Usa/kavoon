const Title = ({ classPrefix }) => {

  const prefix = `${classPrefix ? classPrefix + '-' : ""}title`
  const titleFirstClass = `${prefix}-first`
  const titleSecondClass = `${prefix}-second`
  const titleThirdClass = `${prefix}-third`
  const backgroundClass = `${prefix}-background`
  const backgroundWrapperClass = `${prefix}-background-wrapper`
  
  const mainFontSize = 128;
  const thirdFontSize = 18;
  return (<>
    {/* <div className={backgroundWrapperClass}> */}
      <div className={backgroundClass}>FLOWERS<br /> WAY</div>
    {/* </div> */}
    <div className={titleFirstClass}>FLOWERS</div>
    <div className={titleSecondClass}>WAY</div>
    <div className={titleThirdClass}>Країна очима велосипедистів</div>
    <style jsx>{`

     .${titleFirstClass} {
        font-family: 'Archivo Black', sans-serif;
        font-size: ${mainFontSize}px;
        line-height: 1.18;
        letter-spacing: 5.98px;
        color: #040f2a;
      }
      .${titleSecondClass} {
        font-family: 'Archivo Black', sans-serif;
        font-size: ${mainFontSize}px;
        line-height: 1.18;
        letter-spacing: 5.98px;
        color: #1831aa;
      }
      .${titleThirdClass} {
        font-family: Montserrat;
        font-size: ${thirdFontSize}px;
        font-weight: 600;
        letter-spacing: 0.84px;
        color: var(--texticonscolor);

        text-transform: uppercase;

        position: relative;
        top: -148px;
        left: 340px;
      }
      .${backgroundWrapperClass}{
        position: absolute;
        left: -150px;
      }
      .${backgroundClass} {
        object-fit: contain;
        opacity: 0.08;
        font-family: 'Archivo Black', sans-serif;
        font-size: 184px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.88;
        letter-spacing: 8.6px;
        color: #296fdc;
         position: absolute;
        left: -150px;
      }
      @media only screen and (max-width: 1023px) {
        .${backgroundWrapperClass} {
          left: 0;
        }
        .${backgroundClass} {
          //text-align: center;
          letter-spacing: 3.37px;
          font-size: 72px;
          line-height: 60px;
          left: -20px;
        }
      .${titleFirstClass} {
        //text-align: center;
        font-size: 58px;
        line-height: 62px;
      }
      .${titleSecondClass} {
        //text-align: center;
        font-size: 58px;
        line-height: 62px;
      }
      .${titleThirdClass} {
        //text-align: center;
        font-size: 16px;
        top: 0px;
        left: 0px;
      } 
    }
    `}</style>
  </>)
}

export default Title