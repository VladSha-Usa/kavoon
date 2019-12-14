
const setActive = (active, id) => () => {
  const element = document.getElementById(id);
  if (active) {
    element.classList.add("pathfinder-blog-item-hover");
  } else {
    element.classList.remove("pathfinder-blog-item-hover")
  }
}


const Content = () => {
  return (<div className="main page-content">
    <span className="background-text">FLOWERS<br /> WAY</span>
    <div id="left">
      <span className="flowers-way">FLOWERS</span><br />
      <span className="flowers-way text-style-sss">WAY</span>
      <span className="text-style-caption caption-adjust">Країна очима велосипедистів</span>
      <div className="pathfinder-blog-margin-adjust flex">
        <div className="pathfinder-blog-item disabled">
          <img src="img/blog.jpg" srcSet="img/blog@2x.jpg 2x, img/blog@3x.jpg 3x" className="pathfinder-blog-image" />
          <div className="blog-vertical-text-style pathfinder-blog-text-adjust">BLOG</div>
          <div className="flex center-vertically pathfinder-blog-text-margin-adjust">
            <div className="shape-left" />
            <div className="text">BLOG</div>
            <div className="shape-right" />
          </div>
        </div>
        <div className="pathfinder-blog-item " onMouseEnter={setActive(true, "pathfinder-img")} onMouseLeave={setActive(false, "pathfinder-img")}>
          <a href="#">
            <img id="pathfinder-img" src="img/image.jpg" srcSet="img/image@2x.jpg 2x, img/image@3x.jpg 3x" className="pathfinder-blog-image" />
            <div className="pathfinder-vertical-text-style pathfinder-blog-text-adjust">ПУТІВНИК</div>
            <div className="flex center-vertically pathfinder-blog-text-margin-adjust">
              <div className="shape-left" />
              <div className="text">ПУТІВНИК</div>
              <div className="shape-right" />
            </div>
          </a>
        </div>
        {/* <div className="scroll-down">
              <a href="#">
                <img src="img/scroll-down.svg"  />
              </a>
            </div> */}
      </div>
    </div>
    <div id="right">
      <div id="block-right">
        <img src="img/shop-image.jpg" srcSet="img/shop-image@2x.jpg 2x,img/shop-image@3x.jpg 3x" className="shop-image" />
        <div className="vertical-text-style shop-text-margin-adjust">МАГАЗИН</div>
      </div>
      <div className="equipmnt-margin-ajust">
        <div className="shape-left" />
        <div className="text">Велоспорядження<br />для легких подорожей </div>
        <div className="shape-right" />

      </div>
      <div className="flex center-vertically where-buy-area" >
        <div className="where-buy-text ">Де купити?</div>
        <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">
          <div className="button-field button-field-text center-vertically flex">
            <img style={{ marginLeft: "auto", marginRight: "6px" }} src="img/shop-icon.svg" className="shop-icon" />
            <div style={{ marginRight: "auto", marginLeft: "6px" }}>Shop</div>
          </div>
        </a>
      </div>
    </div>
  </div>)
}

export default Content