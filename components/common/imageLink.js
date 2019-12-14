import { useState } from 'react'

// const setImage = (active, id) => (el1) => {

//   const element = document.getElementById(id);
//   console.log(el1 == element)
//   if (active) {
//     element.src = `img/${id}.svg`
//   } else {
//     element.src = `img/${id}-hover.svg`
//   }
// }


const ImageLink = ({ href, src, hoverSrc, className}) => {
  console.log(src, hoverSrc)
  const [image, setImage] = useState(src)

  return (<a className={className} href={href} >
    <img src={image}
      onMouseEnter={ () => setImage(hoverSrc) }
      onMouseLeave={ () => setImage(src) }
      className="TG" />
  </a>)

}

export default ImageLink