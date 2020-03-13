const BlockItem = ({ classPrefix, src, srcSet, href, children, backText, enabled, type, title, button, icoButton }) => {
  const prefix = `${classPrefix ? classPrefix + '-' : ""}block`
  const shapeRightClass = `${prefix}-shape-right`
  const shapeLeftClass = `${prefix}-shape-left`
  const titleClass = `${prefix}-shape-title`

  const vertBackgroundClass = `${prefix}-background`
  const blockClass = `${prefix}-block`

  const shop = {
    small: {
      fontSize: 58,
      offsetLeft: "125px",
      offsetTop: "-175px",
      letterSpacing: "0.68px",
      imageWidth: "250px",
      imageHeight: "320px",
      width: "280px",
      height: "380px",
      marginRight: "0px",
      marginTop: "0px"
    },
    normal: {
      fontSize: 70,
      offsetLeft: "158px",
      offsetTop: "-223px",
      imageWidth: "320px",
      imageHeight: "400px",
      width: "363px",
      height: "468px",
      marginRight: "0px",
      marginTop: "0px"
    }
  }
  const pathfinder = {
    small: {
      fontSize: 33,
      offsetLeft: "120px",
      offsetTop: "-160px",
      letterSpacing: "1.68px",
      imageWidth: "250px",
      imageHeight: "200px",
      width: "280px",
      height: "244px",
      marginRight: "0px",
      marginTop: "0px"
    },
    normal: {
      fontSize: 33,
      offsetLeft: "120px",
      offsetTop: "-160px",
      letterSpacing: "1.68px",
      imageWidth: "250px",
      imageHeight: "200px",
      width: "280px",
      height: "244px",
      marginRight: "0px",
      marginTop: "0px"
    }
  }
  const blog = {
    small: {
      fontSize: 36,
      offsetLeft: "120px",
      offsetTop: "-160px",
      letterSpacing: "1.68px",
      imageWidth: "250px",
      imageHeight: "200px",
      width: "280px",
      height: "244px",
      marginRight: "0px",
      marginTop: "40px"
    },
    normal: {
      fontSize: 36,
      offsetLeft: "120px",
      offsetTop: "-160px",
      letterSpacing: "1.68px",
      imageWidth: "250px",
      imageHeight: "200px",
      width: "280px",
      height: "244px",
      marginRight: "40px",
      marginTop: "0px"
    }
  }

  var style
  switch (type) {
    case 'blog': style = blog; break;
    case 'shop': style = shop; break;
    case 'pathfinder': style = pathfinder; break;
  }
  var opacity = 1
  if (!enabled) {
    opacity = 0.5
  }


  return (
    <>
      <div style={{ opacity }} className={blockClass}>
        <div className="block-title">{title}</div>
        {/* style={ hover ? { margin: "-2px", border: "solid 2px var(--primarycolor)" } : { border: "solid 0px var(--primarycolor)"} }  */}
        <div className="img-wrapper">
          <img src={src} srcSet={srcSet} className="pathfinder-blog-image" />
          <div className="button-img-wrapper">
            <a href="#">
              <button className="button-img">{button}</button>
              <img src={icoButton} className="ico-button" />
            </a>
          </div>
        </div>
        <div className={vertBackgroundClass}>{backText || children}</div>

        <div className={titleClass}>
          <div className={shapeLeftClass} />
          <div className="text">{children}</div>
          <div className={shapeRightClass} />
        </div>
      </div>
      <style jsx>{`
     .block-title {
       text-align: center;
       margin-bottom: 14px;
       width: ${style.normal.imageWidth};
       font-family: Montserrat;
       font-size: 17px;
       font-weight: 600;
       font-stretch: normal;
       font-style: normal;
       letter-spacing: 0.79px;
       color: #040f2a;
     }
     .img-wrapper {
       position: relative;
       width: fit-content;
     }
     .button-img-wrapper {
       position: absolute;
       z-index: 10;
       bottom: 4px;
       right: 0;
     }
     .button-img-wrapper a {
       text-decoration: none;
       display: flex;
     }
     .button-img-wrapper .button-img {
       cursor: pointer;
       font-family: Montserrat;
       font-size: 16px;
       letter-spacing: 0.75px;
       font-weight: 600;
       color: #ffffff;
       font-stretch: normal;
       font-style: normal;
       line-height: normal;
       background-color: #1831aa;
       border: none;
       padding: 15px 51px 15px 16px;
       border-bottom-right-radius: 10px;
       border-bottom-left-radius: 30px;
       border-top-left-radius: 30px;
       outline: none;
     }
     .button-img-wrapper .ico-button {
      position: absolute;
      right: 19px;
      align-self: center;
     }

     .${shapeLeftClass} {
        margin-left: auto;
        margin-right: 10px;
        width: 15px;
        height: 2px;
        background-color: #1831aa;
      }
      .${shapeRightClass}{
        margin-left: 10px;
        margin-right: auto;
        width: 15px;
        height: 2px;
        background-color: #1831aa;
      }
      .${titleClass} {
        width: ${style.normal.imageWidth}px;
        align-items: center;
        display: flex;
        position: relative;
        left: -10px;
        top: -${style.normal.fontSize * 0.75}px;
      }
      .${vertBackgroundClass} {
        object-fit: contain;
        transform: rotate(-90deg);
        opacity: 0.12;
        font-family: Montserrat;
        font-size: ${style.normal.fontSize}px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: ${style.normal.letterSpacing};
        color: #296fdc;

        position: relative;
        z-index: 0;
        left: ${style.normal.offsetLeft};
        top: ${style.normal.offsetTop};
      }
      .pathfinder-blog-image {
        border-radius: 10px;
        position: relative;
        width: ${style.normal.imageWidth};
        height: ${style.normal.imageHeight};
        object-fit: contain;
        overflow: hidden;
        box-shadow: 14px 25px 46px 0 rgba(9, 21, 85, 0.2);
        z-index: 10;
      }

      .text {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.65;
        letter-spacing: 0.75px;
        text-align: center;
        color: #061434;
        text-transform: uppercase;
      }

      .${blockClass} {
        width: ${style.normal.width};
        height: ${style.normal.height};
        margin-right: ${style.normal.marginRight};
        margin-top: ${style.normal.marginTop};
      }
      @media only screen and (max-width: 1165px) {
       .pathfinder-blog-image {
          width: ${style.small.imageWidth};
          height: ${style.small.imageHeight};
        }
       .button-img-wrapper .button-img {
          padding: 7px 35px 7px 10px;
          font-size: 13px;
        }
        .button-img-wrapper .ico-button {
          height: 14px;
          width: 15px;
          right: 12px;
        }
        .${blockClass} {
          width: ${style.small.width};
          height: ${style.small.height};
          margin-right: ${style.normal.marginRight};
        }
         .${vertBackgroundClass} {
          font-size: ${style.small.fontSize}px;
          letter-spacing: ${style.small.letterSpacing};
          left: ${style.small.offsetLeft};
          top: ${style.small.offsetTop};
        }
         .${titleClass} {
          width: ${style.small.imageWidth};
          top: -${style.small.fontSize}px;
        }
      }


      // .pathfinder-blog-image {
      //   ${href ? "border: solid 2px var(--primarycolor);" : ""}
      // }


      @media only screen and (max-width: 1023px) {
        .block-title {
          font-size: 17px;
          width: ${style.small.imageWidth};
        }
        .${titleClass} {
          width: ${style.small.width};
          top: -${style.small.fontSize}px;
        }
        .${vertBackgroundClass} {
          font-size: ${style.small.fontSize}px;
          letter-spacing: ${style.small.letterSpacing};
          left: ${style.small.offsetLeft};
          top: ${style.small.offsetTop};
        }
        .pathfinder-blog-image {
          width: ${style.small.imageWidth};
          height: ${style.small.imageHeight};
        }

        .${blockClass} {
          margin-right: auto;
          margin-left: auto;
          //margin-top: 40px;
          width: ${style.small.width};
          height: ${style.small.height};
          margin-top: ${style.small.marginTop};
        }
      }

  `}</style>
    </>
  );
}

export default BlockItem;