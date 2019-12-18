import '../components/styleguide.scss'

import React, { useEffect } from 'react'
import Pathfinder from '../components/pathfinder'
import Head from 'next/head'
import Header from '../components/mainPage/header'
import Content from '../components/mainPage/content'

const headerHeight = 80

const onScroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("home").classList.add("header-border");
  } else {
    document.getElementById("home").classList.remove("header-border");
  }
}


const Home = () => {
  useEffect(() => {
    document.onscroll = onScroll;
    
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
      <div className="header">
        <div className="page-content" style={{ height: "100%" }}>
          <Header />
        </div>
      </div>
      <div className="page-content content">
        <Content />
      </div>
    </div>
     <div id="pathfinder" className="page-content"><Pathfinder /> </div>
    <style jsx>{`

      .header {
        height: ${headerHeight}px;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        width: 100vw;
        //overflow:hidden;
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
      @media only screen and (max-width: 1023px) {
        .page-content {
          max-width: 375px;
          margin-left: auto;
          margin-right: auto;
        }
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

      .content {
        position: relative;
        padding-top: ${headerHeight + 40}px;
        
        //overflow:hidden;
        margin-bottom: auto;
        //width: 100vw;
      }
    `}
    </style>
  </>)
}

export default Home
