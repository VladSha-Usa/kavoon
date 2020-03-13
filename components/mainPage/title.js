const Title = ({ classPrefix }) => {

  const prefix = `${classPrefix ? classPrefix + '-' : ""}title`
  const titleFirstClass = `${prefix}-first`
  const titleSecondClass = `${prefix}-second`
  const backgroundClass = `${prefix}-background`
  
  const mainFontSize = 134;
  return (<>
    <div className={backgroundClass}>FLOWERS<br /> WAY</div>
    <div className={titleFirstClass}>FLOWERS</div>
    <div className={titleSecondClass}>WAY</div>
    <style jsx>{`

     .${titleFirstClass} {
        font-family: 'Archivo Black', sans-serif;
        font-size: ${mainFontSize}px;
        line-height: 1.12;
        letter-spacing: 5px;
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
      .${backgroundClass} {
        object-fit: contain;
        opacity: 0.08;
        font-family: 'Archivo Black', sans-serif;
        font-size: 188px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.88;
        letter-spacing: 8.6px;
        color: #296fdc;
        position: absolute;
        left: -130px;
        margin-top: 9px;
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
      }

      @media only screen and (max-width: 1023px) {
  
        .${backgroundClass} {
          letter-spacing: 3.37px;
          font-size: 72px;
          line-height: 60px;
          left: -20px;
          width: 100vw;
          overflow: hidden;
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
      }

    `}</style>
  </>)
}

export default Title