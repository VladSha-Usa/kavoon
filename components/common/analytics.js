import { useEffect } from 'react'
import Head from 'next/head'

const Analytics = () => {
  useEffect(() => {


    var firebaseConfig = {
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
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()

  });

  return (
  <>
    <Head>
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-analytics.js"></script>
    </Head>
  </>)
}

export default Analytics