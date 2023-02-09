// import Link from 'next/link'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                Home 
            </Link>
            <Link href="/about"> 
                About
            </Link>

            <a target="_blank" href="https://www.google.com">GitHub</a>
        </nav>
    )
}