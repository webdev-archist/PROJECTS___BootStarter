'use client'

// import { useContext, useState } from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton, useAuth, useUser } from '@clerk/nextjs'

async function ok(e){
    e.preventDefault()
    console.log("okokokokokok");
    console.log(e.target);
}

export default function Header() {
    
    const { isSignedIn, user } = useUser()
    , { isLoaded, userId, sessionId, getToken } = useAuth()
	
	return <header className="header">
        <Link href="/" className="header__logo">
            <img src="/img/logo.jpeg" alt="" />
            <hgroup>
                <h1>
                    <span>Galerie au service de l'art Ivoirien</span>
                </h1>
            </hgroup>
        </Link>
        <menu className="header__mainMenu">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/expositions-gallerie-art-kynome">Expos/Évenements</Link></li>
            {/* <li><a href="/artistes-panafricains">Artistes</a></li> */}
            {/* <li><a href="oeuvres-artistiques">Oeuvres artistiques</a></li> */}
        </menu>
        <section className="account">
            <SignedOut>
                <Link href="/sign-in"></Link>
                {/* <Link href="/sign-up">Sign up</Link> */}
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </section>
        <SignedIn>
            <section className="cart">
                <Link href="/panier">
                    <span>0</span>
                </Link>
            </section>
        </SignedIn>
        <section className="search">
            <form onSubmit={e=>{ok(e)}}>
                <input type="text" />
                <input type="submit" value="🔎" />
            </form>
        </section>

	</header>
}



