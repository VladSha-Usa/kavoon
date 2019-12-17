const Title = ({ classPrefix }) => {

  const prefix = `${classPrefix ? classPrefix + '-' : ""}title`
  const titleFirstClass = `${prefix}-first`
  const titleSecondClass = `${prefix}-second`
  const titleThirdClass = `${prefix}-third`

  const mainFondSize = 128;
  const thirdFontSize = 18;
  return (<>
    <span className={titleFirstClass}>FLOWERS</span><br />
    <span className={titleSecondClass}>WAY</span>
    <div className={titleThirdClass}>Країна очима велосипедистів</div>
    <style jsx>{`

     .${titleFirstClass} {
        font-family: 'Archivo Black', sans-serif;
        font-size: ${mainFondSize}px;
        line-height: 1.18;
        letter-spacing: 5.98px;
        color: #040f2a;
      }
      .${titleSecondClass} {
        font-family: 'Archivo Black', sans-serif;
        font-size: ${mainFondSize}px;
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

      @media only screen and (max-width: 1023px) {
      .${titleFirstClass} {
        font-size: 58px;
        line-height: 62px;
      }
      .${titleSecondClass} {
        font-size: 58px;
        line-height: 62px;
      }
      .${titleThirdClass} {
        font-size: 16px;
        top: 0px;
        left: 0px;
      } 
    }
    `}</style>
  </>)
}

export default Title