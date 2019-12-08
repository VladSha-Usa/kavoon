//import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
// import Head from 'next/head'
// import Nav from '../components/nav'
// import Banner from '../components/banner'
// import Shop from '../components/shop'


// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Image from 'react-bootstrap/Image'
// import Carousel from 'react-bootstrap/Carousel'


const headerHegith = 110

const Home = () => {
  return (<>
    <div id="Body" className="map-image">
      <header>
        <nav>
          text
      </nav>
      </header>
      <div className="main">
        <span className="background-text">FLOWERS<br /> WAY</span>
        <div id="left">
          <div id="block-left">
            <span className="flowers-way">FLOWERS</span><br />
            <span className="flowers-way text-style-sss">WAY</span>
          </div>
        </div>
        <div id="right">
          <div id="block-right">
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`uu
      header {
        display: flex;
        height: ${headerHegith}px;
        align-items: center;
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100%;
        //background-color: transparent;
      }
      .main {
        height: 200vh; 
        display: flex;
        position: relative;
        width: 100%;
        padding-top: ${headerHegith}px;
        //background-color: rgba(0,255, 0, 0.1);
      }
      .flowers-way {
        font-family: ArchivoBlack;
        font-size: 128px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.18;
        letter-spacing: 5.98px;
        color: #040f2a;
      }
      
      .text-style-sss {
        color: #1831aa;
      }
      .background-text {
        display: block;
        position: absolute;
        left: -50px;
        object-fit: contain;
        opacity: 0.08;
        font-family: ArchivoBlack;
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
        width: 69.99%;
        height: 500px;
        //background-color: rgba(0,255, 255, 0.3);
      }
      #right {
        width: 30%;
        height: 500px;
        //background-color: rgba(255,255, 0, 0.3);
      }
      #block-left {
        position: relative;
        width: 250px;
        height: 250px;
      }
      #block-right {
        position: relative;
        width: 250px;
        height: 250px;
        //background-color: black;
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
    `}
    </style>
  </>)
}

export default Home
