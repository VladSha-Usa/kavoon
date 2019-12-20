import '../components/styleguide.scss'

import React, { useEffect } from 'react'
import Pathfinder from '../components/pathfinder'
import Head from 'next/head'
import Header from '../components/mainPage/header'
import Content from '../components/mainPage/content'

const headerHeight = 80

const onScroll = () => {
  //  console.log("Scroll")
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("home").classList.add("header-border");
  } else {
    document.getElementById("home").classList.remove("header-border");
  }
}

const Home = () => {
  useEffect(() => {
    document.onscroll = onScroll;
    onScroll()

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
      <title>Flower's Way. Країна очима велосипедистів</title>
      <meta property="og:locale" content="uk_UA"/>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Flower's Way. Країна очима велосипедистів. Сумки, велоспорядження" />
      <meta property="og:description" content="Велосумки для легких подорожей. власне виробництво. просте монтування" />
      <meta property="og:url" content="https://flowersway.com.ua" />
      <meta property="og:image" content="https://flowersway.com.ua/img/shop-image.jpg" />
      <meta property="og:site_name" content="Спорядження для легких подорожей" />


      <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,900&display=swap" rel="stylesheet" />
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-analytics.js"></script>

    </Head>

    <div className="map-image">
      <div id="home" className="header">
        <div className="page-content" style={{ height: "100%" }}>
          <Header />
        </div>
      </div>
      <div className="page-content content">
        <Content />
      </div>
    </div>
    <div className="bg-block-2">
      <div id="pathfinder" className="page-content bg-block-2" style={{paddingTop: "50px"}}><Pathfinder /> </div>
    </div>
    <style jsx>{`

      .header {
        height: ${headerHeight}px;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100vw;
      }

      .header-page {
        align-items: center;
        height: 100%;
      }
      .page-content {
        max-width: 1166px;
        margin-left: auto;
        margin-right: auto;
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

      .header-border ::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--light-blue-grey);
      }

      .header-border {
          background-color: #ffffff;
      }

      .content {
        position: relative;
        padding-top: ${headerHeight + 27}px;
        margin-bottom: auto;
      }

      .bg-block-2 {
        background-color: #f6faff;
      }

      @media only screen and (max-width: 1165px) {
        .page-content {
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media only screen and (max-width: 1023px) {
        .page-content {
          max-width: 375px;
          margin-left: auto;
          margin-right: auto;
        }
        .map-image {
          height: initial;
        }
      }
    `}
    </style>
  </>)
}

export default Home
