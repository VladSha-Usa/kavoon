import { useState, useEffect } from 'react'


const preloadImage = (url) => {
  new Image().src = url
}

const ImageLink = ({ href, src, hoverSrc, className}) => {

  const [image, setImage] = useState(src)

  useEffect(() => {
    preloadImage(hoverSrc)
  })
  return (<a className={className} href={href} >
    <img src={image}
      onMouseEnter={ () => setImage(hoverSrc) }
      onMouseLeave={ () => setImage(src) }
      className="TG" />
  </a>)

}

export default ImageLink