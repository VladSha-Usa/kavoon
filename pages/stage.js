import React from 'react'
import Head from 'next/head'

const Stage = () => {
return (<>
    <Head>
        <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    </Head>
    <div className="shop-text">МАГАЗИН</div>
    <div className="where-buy-text">МАГАЗИН</div>
    <style jsx>{`
      .shop-text {

        position: relative;
        object-fit: contain;
        // left: 180px;
        // top: -210px;
    //transform: rotate(-90deg);
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
    `}</style>
</>)
}


export default Stage