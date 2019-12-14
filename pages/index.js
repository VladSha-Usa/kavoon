import '../components/styleguide.scss'

import React, { useEffect } from 'react'
import Pathfinder from '../components/pathfinder'
import Head from 'next/head'
import Header from '../components/mainPage/header'
import Content from '../components/mainPage/content'

const headerHegith = 80

const onScroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("home").classList.add("header-border");
  } else {
    document.getElementById("home").classList.remove("header-border");
  }
}

const preloadImage = (url) => {
  new Image().src = url
}

const Home = () => {
  useEffect(() => {
    document.onscroll = onScroll;
    
    preloadImage('img/viber.svg')
    preloadImage('img/instagram.svg')
    preloadImage('img/facebook.svg')

    // var firebaseConfig = {
    //   apiKey: "AIzaSyC8mAIUcvd7bqw46bajWEbRrHcDTnd1qTw",
    //   authDomain: "flowers-way.firebaseapp.com",
    //   databaseURL: "https://flowers-way.firebaseio.com",
    //   projectId: "flowers-way",
    //   storageBucket: "flowers-way.appspot.com",
    //   messagingSenderId: "305623494289",
    //   appId: "1:305623494289:web:fa6954b42047c910079930",
    //   measurementId: "G-PSBJYP7E5X"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig)
    // firebase.analytics()

  });
  return (<>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap" rel="stylesheet" />
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-analytics.js"></script>

    </Head>

    <div id="home" className="map-image">
      <Header />
      {/* <Content /> */}
    </div>
    {/* <div id="pathfinder" className="page-content"><Pathfinder /> </div> */}
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

        max-width: 1166px;
        margin: auto;
        width: 100%;
      }
      .main {
        display: flex;
        position: relative;
        padding-top: ${headerHegith + 40}px;
        margin-bottom: auto;
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

      @media only screen and (max-width: 1166px) {
        .flowers-way {
          font-size: 100px;
        }
        .background-text {
          font-size: 140px;
        }
        .text-style-caption {
            font-size: 14px;
        }
       
        .caption-adjust {
            position: relative;
            top: -60px;
            left: 20px;
        }
        .pathfinder-blog-item {
          margin-right: 25px;
          width: 260px;
          height: 244px;
        }
        .pathfinder-vertical-text-style {
          font-size: 30px;
        }
        .blog-vertical-text-style {
          font-size: 32px;
        }
         .pathfinder-blog-text-adjust {
          position: relative;
          left: 131px;
          top: -150px;
        }
      }
      .text-style-sss {
        color: #1831aa;
      }
     
      #left {
        position: relative;
        justify-content: flex-start;
        margin-right: auto;
        margin-bottom: auto;
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
      }
      .center-vertically {
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
        margin: -1px;
        border: solid 1px var(--primarycolor);
      }

      .pathfinder-blog-margin-adjust {
        top: 55px;
        height: 100%;
        position: relative;
      }
      .pathfinder-blog-text-margin-adjust {
        margin-top: -30px;
        width: 250px;
       }
      
     
     
      

      .scroll-down {
        width: 61px;
        height: 176px;
        object-fit: contain;
        position: absolute;
        bottom: 20px;
        left: 650px;
      }
    `}
    </style>
  </>)
}

export default Home
