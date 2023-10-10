import { useEffect, useContext } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav"



export default function Layout({ children }) {
    return (
        <ClerkProvider>
            <Header />
            <Nav />
            {children}
            <Footer />
        </ClerkProvider>
    )
}
