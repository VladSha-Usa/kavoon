const setActive = (active, id) => () => {
  const element = document.getElementById(id);
  if (active) {
    element.classList.add("pathfinder-blog-item-hover");
  } else {
    element.classList.remove("pathfinder-blog-item-hover")
  }
}


const BlockItem = ({ classPrefix, src, srcSet, children, backText, enabled, type }) => {
  const prefix = `${classPrefix ? classPrefix + '-' : ""}block`
  const shapeRightClass = `${prefix}-shape-right`
  const shapeLeftClass = `${prefix}-shape-left`
  const titleClass = `${prefix}-shape-title`

  const vertBackgroundClass = `${prefix}-background`
  const blockClass = `${prefix}-block`

  const shop = {
    backStyle: {
      fontSize: "70px",
      offsetLeft: "158px",
      offsetTop: "-223px"
    },

    sizeStyle: {
      imageWidth: "320px",
      imageHeight: "400px",
      width: "363px",
      height: "468px"
    }
  }
  const pathfinder = {
    backStyle: {
      fontSize: "28px",
      offsetLeft: "120px",
      offsetTop: "-160px"
    },
    sizeStyle: {
      imageWidth: "250px",
      imageHeight: "200px",
      width: "280px",
      height: "244px"
    }
  }
  const blog = {
    backStyle: {
      fontSize: "36px",
      offsetLeft: "120px",
      offsetTop: "-160px"
    },
    sizeStyle: {
      imageWidth: "250px",
      imageHeight: "200px",
      width: "280px",
      height: "244px"
    }
  }

  var style
  switch (type) {
    case 'blog': style = blog; break;
    case 'shop': style = shop; break;
    case 'pathfinder': style = pathfinder; break;
  }


  return (<>
    <div className={blockClass}>
      <a href="#">
        <img src={src} srcSet={srcSet} className="pathfinder-blog-image" />
        <div className={vertBackgroundClass}>{backText || children}</div>

        <div className={titleClass}>
          <div className={shapeLeftClass} />
          <div className="text">{children}</div>
          <div className={shapeRightClass} />
        </div>
      </a>
    </div>
    <style jsx>{`
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
        width: ${style.sizeStyle.imageWidth};
        align-items: center;
        display: flex;
        position: relative;
       
        top: -${style.backStyle.fontSize};
      }
      .${vertBackgroundClass} {
        object-fit: contain;
        transform: rotate(-90deg);
        opacity: 0.12;
        font-family: Montserrat;
        font-size: ${style.backStyle.fontSize};
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: 1.68px;
        color: #296fdc;

        position: relative;
        left: ${style.backStyle.offsetLeft};
        top: ${style.backStyle.offsetTop};
      }

      a:link {
        text-decoration: none;
      }

      a:visited {
        text-decoration: none;
      }

      .pathfinder-blog-image {
        border-radius: 10px;
        position: relative;
        width: ${style.sizeStyle.imageWidth};
        height: ${style.sizeStyle.imageHeight};
        object-fit: contain;
        box-shadow: 14px 25px 46px 0 rgba(9, 21, 85, 0.2);
        z-index: 1;
      }

      .text {
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.65;
        letter-spacing: 0.79px;
        text-align: center;
        color: #061434;
        text-transform: uppercase;
      }

      .${blockClass} {
        width: ${style.sizeStyle.width};
        height: ${style.sizeStyle.height};
      }
  `}</style>
  </>)
}

export default BlockItem;