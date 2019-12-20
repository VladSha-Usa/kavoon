const Title = ({ classPrefix }) => {

  const prefix = `${classPrefix ? classPrefix + '-' : ""}title`
  const titleFirstClass = `${prefix}-first`
  const titleSecondClass = `${prefix}-second`
  const titleThirdClass = `${prefix}-third`
  const backgroundClass = `${prefix}-background`
  
  const mainFontSize = 128;
  const thirdFontSize = 18;
  return (<>
    <div className={backgroundClass}>FLOWERS<br /> WAY</div>
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
        padding-top: 10px;
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
        max-width: 380px;
        position: relative;
        top: -158px;
        left: 360px;
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
        left: -130px;
      }

      @media only screen and (max-width: 1165px) {
        .${backgroundClass} {
          font-size: 138px;
          left: -50px;     
        }
        .${titleFirstClass} {
          font-size: 104px;
        }
        .${titleSecondClass} {
          font-size: 104px;
        }
        .${titleThirdClass} {
          font-size: 15px;
          letter-spacing: 0.54px;
          top: -138px;
          left: 310px;
        } 
      }

      @media only screen and (max-width: 1023px) {
  
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
          //padding-top: 0;
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