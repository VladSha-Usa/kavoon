import '../components/styleguide.css'

import React from 'react'
import Pathfinder from '../components/pathfinder'
import Head from 'next/head'
import Link from 'next/link'

const headerHegith = 100


const setActive = (active, id) => () => {
  const element = document.getElementById(id);
  if (active) {
    element.classList.add("pathfinder-blog-item-hover");
  } else {
    element.classList.remove("pathfinder-blog-item-hover")
  }
}


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8mAIUcvd7bqw46bajWEbRrHcDTnd1qTw",
  authDomain: "flowers-way.firebaseapp.com",
  databaseURL: "https://flowers-way.firebaseio.com",
  projectId: "flowers-way",
  storageBucket: "flowers-way.appspot.com",
  messagingSenderId: "305623494289",
  appId: "1:305623494289:web:fa6954b42047c910079930",
  measurementId: "G-PSBJYP7E5X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase)



const Home = () => {

  return (<>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:500,600,900&display=swap" rel="stylesheet" />
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-analytics.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js"></script>
    </Head>

    <div className="map-image" >
      <header className="nav-menu-title">
        <div className="page-content header-page flex">
          <div style={{ width: "220px", justifyContent: "flex-start" }}>
            <nav >
              <a href="#">
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

            <nav style={{ width: "50px", height: "40px" }}>
              <a href="#">
                <img src="img/viber.svg" style={{ fill: "#AB7C94" }}
                  className="TG" />
              </a>

            </nav>

            <nav style={{ width: "50px", height: "40px" }}>
              <a href="#">
                <img src="img/viber.svg" style={{ fill: "#AB7C94" }}
                  className="TG" />
              </a>

            </nav>
            <nav style={{ width: "50px", height: "40px" }}>
              <a href="#">
                <img src="img/viber.svg" style={{ fill: "#AB7C94" }}
                  className="TG" />
              </a>

            </nav>
          </div>

        </div>
      </header>

      <div className="main page-content">
        <span className="background-text">FLOWERS<br /> WAY</span>
        <div id="left">
          <span className="flowers-way">FLOWERS</span><br />
          <span className="flowers-way text-style-sss">WAY</span>
          <div className="flex pathfinder-blog-margin-adjust">
            <div className="pathfinder-blog-item disabled">
              <img src="img/blog.jpg" srcSet="img/blog@2x.jpg 2x, img/blog@3x.jpg 3x" className="pathfinder-blog-image" />
              <div className="blog-vertical-text-style pathfinder-blog-text-adjust">BLOG</div>
              <div className="flex pathfinder-blog-text-margin-adjust">
                <div className="shape-left" />
                <div className="text">BLOG</div>
                <div className="shape-right" />
              </div>
            </div>
            <div className="pathfinder-blog-item" onMouseEnter={setActive(true, "pathfinder-img")} onMouseLeave={setActive(false, "pathfinder-img")}>
              <a href="#">
                <img id="pathfinder-img" src="img/image.jpg" srcSet="img/image@2x.jpg 2x, img/image@3x.jpg 3x" className="pathfinder-blog-image" />
                <div className="pathfinder-vertical-text-style pathfinder-blog-text-adjust">ПУТІВНИК</div>
                <div className="flex pathfinder-blog-text-margin-adjust">
                  <div className="shape-left" />
                  <div className="text">ПУТІВНИК</div>
                  <div className="shape-right" />
                </div>
              </a>
            </div>
            {/* <div className="">
              <a href="#">
                <img src="img/scroll-down.svg" class="scroll-down"/>
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
          <div className="flex where-buy-area" >
            <div className="where-buy-text ">Де купити?</div>
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">
              <div className="button-field button-field-text flex">
                <img style={{ marginLeft: "auto", marginRight: "6px" }} src="img/shop-icon.svg" className="shop-icon" />
                <div style={{ marginRight: "auto", marginLeft: "6px" }}>Shop</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="page-content text"><Pathfinder /> </div>

    </div>

    <style jsx>{`
      header {
        height: ${headerHegith}px;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100%;
      }
      
      .header-page {
        align-items: center;
        height: 100%;
      }
      .page-content {
        //min-width: 1066px;
        max-width: 1166px;
        margin: auto;
        width: 100%;
      }
      .main {
        height: 100vh;
        display: flex;
        position: relative;
        padding-top: ${headerHegith + 40}px;
        background-color: transparent;
      }
      
      .flowers-way {
        font-family: 'Archivo Black', sans-serif;
        font-size: 128px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.18;
        letter-spacing: 5.98px;
        color: #040f2a;
      }
      @media only screen and (max-width: 1166px) {
        .flowers-way {
          font-size: 100px;
        }
      }
      .text-style-sss {
        color: #1831aa;
      }
      .background-text {
        position: absolute;
        left: -150px;
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

        //background-color: rgba(0,0, 255, 0.1);
      }
      #left {
        position: relative;
        justify-content: flex-start;
        margin-right: auto;
      }
      #right {
        position: relative;
        justify-content: flex-end;
        margin-top: 20px;
        width: 360px;
      }
      #block-right {
        position: relative;
        width: 320px;
      }

      .map-image {
        /* Set a specific height */
        height: 100vh; 
      
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;


        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) -3%, rgba(255, 255, 255, 0.68) 117%), url(img/map-image.png);
      }
      .vertical-text-style {
          position: relative;
          object-fit: contain;
          transform: rotate(-90deg);
          opacity: 0.12;
          font-family: 'Montserrat', sans-serif;;
          font-size: 70px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: 0.57;
          letter-spacing: 0.82px;
          color: #296fdc;
      }
      .shop-text-margin-adjust {
        left: 177px;
        top: -183px;
      }

      .shop-image {
        position: relative;
        object-fit: contain;
        border-radius: 10px;
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
      .equipmnt-margin-ajust {
        display: flex;
        align-items: center;
        margin-top: -30px;
        margin-right: 43px;
       }
      .flex {
        display: flex;
        align-items: center;
       }
       .center {
        display: flex;
        margins: auto;
        align-items: center;
       }

       .margins-left {
        margin-left: auto;
        margin-right: 10px;
      }
      .margins-right {
        margin-left: 10px;
        margin-right: auto;
      }
       
      .shape-left {
        margin-left: auto;
        margin-right: 10px;
        width: 15px;
        height: 2px;
        background-color: #1831aa;
      }
      .shape-right {
        margin-left: 10px;
        margin-right: auto;
        width: 15px;
        height: 2px;
        background-color: #1831aa;
      }
      .shop-icon {
        margin-right: 12px;
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
      .button-field {
        position: relative;
        left:20px;
        top: 0px;
        width: 180px;
        height: 50px;
        border-radius: 25px;
        box-shadow: 0 14px 24px 0 rgba(13, 26, 113, 0.25);
        background-color: #1831aa;
      }
      .button-field :hover{
          background-color: #3653e2;
      }
      .button-field-text {
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.79px;
        text-transform: uppercase;
        color: #ffffff;
      }
      .where-buy-area {
        margin-top: 37px;
      }
      .where-buy-text {
        // width: 124px;
        // height: 22px;
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: 0.79px;
        text-transform: uppercase;
        color: #061434;
      }
      .pathfinder-blog-image {
        border-radius: 10px;
        position: relative;
        width: 250px;
        height: 200px;
        object-fit: contain;
        box-shadow: 14px 25px 46px 0 rgba(9, 21, 85, 0.2);
        z-index: 1;
      }
      .pathfinder-blog-item-hover {
        width: 250px;
        height: 200px;
        margin: -1px;
        border: solid 1px var(--primarycolor);
      }

      .pathfinder-blog-margin-adjust {
        margin-top: 70px;
      }
      .pathfinder-blog-text-margin-adjust {
        margin-top: -30px;
        width: 250px;
       }
      .pathfinder-blog-item {
        margin-right: 45px;
        width: 280px;
        height: 244px;
      }
     
      .pathfinder-blog-text-adjust {
        position: relative;
        left: 120px;
        top: -160px;
      }
      .pathfinder-vertical-text-style {
        object-fit: contain;
        transform: rotate(-90deg);
        opacity: 0.12;
        font-family: Montserrat;
        font-size: 33px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.21;
        letter-spacing: 1.54px;
        color: #296fdc;
      }
      .blog-vertical-text-style {
        object-fit: contain;
        transform: rotate(-90deg);
        opacity: 0.12;
        font-family: Montserrat;
        font-size: 36px;
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: 1.68px;
        color: #296fdc;
      }

      .scroll-down {
        width: 45px;
        height: 160px;
        object-fit: contain;
      }
    `}
    </style>
  </>)
}

export default Home
