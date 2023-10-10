import Link from 'next/link'




export default function Nav() {
  return (
    <nav className="filAriane">
        <ul className="filAriane__list">
          <li><Link href="/">Accueil</Link></li>
          {/* <li><Link href="">autre</Link></li> */}
        </ul>
    </nav>
  )
}
