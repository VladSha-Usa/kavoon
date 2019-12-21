const Footer = () => {
  return (<>
  <div style={{display: 'flex'}}>
    <img src="img/logo-footer.png"
      srcset="img/logo-footer@2x.png 2x,
               img/logo-footer@3x.png 3x"
     className="logo-footer" />
  </div>
  
  <style jsx>{`
  .logo-footer {
    width: 210px;
    height: 55px;
    object-fit: contain;
  }`}</style>
  </>)
}

export default Footer