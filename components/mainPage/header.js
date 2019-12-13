
const setImage = (active, id) => (el1) => {

  const element = document.getElementById(id);
  console.log(el1 == element)
  if (active) {
    element.src = `img/${id}.svg`
  } else {
    element.src = `img/${id}-hover.svg`
  }
}

const Header = () => {
  return (
    <header className="nav-menu-title">
      <div className="page-content header-page flex">
        <div style={{ width: "220px", justifyContent: "flex-start" }}>
          <nav >
            <a href="#home">
              <img src="img/logotype.png" srcSet="img/logotype@2x.png 2x, img/logotype@3x.png 3x" />
            </a>
          </nav>
        </div>
        <div className="flex" style={{ position: "relative", margin: "auto" }}>
          <nav style={{ margin: "20px" }} className="nav-menu-title-underline" >
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">Магазин</a>
          </nav>
          <nav style={{ margin: "20px" }} className="nav-menu-title-underline">
            <a href="#">Путівник</a>
          </nav>
          <nav style={{ margin: "20px" }} >
            <span className="disabled">Блог</span>
          </nav>
        </div>
        <div className="flex" style={{ width: "220px", justifyContent: "flex-end" }}>

          <nav style={{ width: "50px", height: "40px" }} >
            <a href="#" >
              <img id="viber" src="img/viber.svg"
                onMouseEnter={setImage(false, "viber")}
                onMouseLeave={setImage(true, "viber")}
                className="TG" />
            </a>

          </nav>

          <nav style={{ width: "50px", height: "40px" }}>
            <a href="http://instagram.com/flowers__way/">
              <img id="instagram" src="img/instagram.svg"
                onMouseEnter={setImage(false, "instagram")}
                onMouseLeave={setImage(true, "instagram")}
                className="TG" />
            </a>

          </nav>
          <nav style={{ width: "50px", height: "40px" }}>
            <a href="https://www.facebook.com/ovchynnikova.nadiia/">
              <img id="facebook" src="img/facebook.svg"
                onMouseEnter={setImage(false, "facebook")}
                onMouseLeave={setImage(true, "facebook")}
                className="TG" />
            </a>

          </nav>
        </div>

      </div>
    </header>)
}

export default Header