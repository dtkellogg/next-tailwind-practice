import Link from "next/link"

function Nav() {
  return (
    <nav className="w-full flex justify-evenly">
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