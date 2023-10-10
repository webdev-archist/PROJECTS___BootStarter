'use client'

import Link from 'next/link'
import Slider from "react-slick";


let  settingsSlider = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true
}
, myLoader = ({ src, width, quality }) => {
return `${src}?w=${width}&q=${quality || 75}`
}
  
export default () => {
  return <Slider {...settingsSlider} >
      
    <figure>
      <h3>Un teste</h3>
      <Link href="/">lien ici</Link>
    </figure>
    <figure>
      <h3>Un teste1</h3>
      <Link href="/">lien ici</Link>
    </figure>
    <figure>
      <h3>Un teste2</h3>
      <Link href="/">lien ici</Link>
    </figure>
  </Slider>
}
