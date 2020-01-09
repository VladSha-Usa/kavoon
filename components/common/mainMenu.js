import {useEffect} from 'react'

const MainMenu = ({onClose})=> {
  
  useEffect(()=>{
    document.body.classList.add("no-scroll")
    return function cleanup() {
      document.body.classList.remove("no-scroll")
    };
  })
return (<>
  <div style={{zIndex: 2000, position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", background: "#ffffff" }}>
    <div style={{ alignItems: "center", position: "absolute", width: "20px", height: "20px", top: "20px", right: "20px" }} onClick={() => onClose()}>
      <img style={{margin: "auto"}} src="img/cancelIcon.png"></img>
    </div>
  </div>
</>)
}

export default MainMenu