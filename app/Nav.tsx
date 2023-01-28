import Link from "next/link"

function Nav() {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/buttons">
        Buttons
      </Link>
    </nav>
  )
}

export default Nav