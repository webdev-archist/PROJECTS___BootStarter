'use client'

import SNS from "./_/SNS"


export default function Footer() {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <a href="#privacy_policy">POLITIQUE DE CONFIDENTIALITÉ</a>
        </li>
        <li>
          COPYRIGHT © 2023 - {new Date().getFullYear()} - GALERIE KIYOME - RUE DES JARDINS, COCODY, ABIDJAN
        </li>
        <li>
          SITE BY <a href="archst.me">ARCHIST</a>
        </li>
      </ul>
      
      {/* section*3>h5{titre footer $}+ul>li*3>{lorem} */}
      <section>
        <SNS />
      </section>
    </footer>
  )
}
