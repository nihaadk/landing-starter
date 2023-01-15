import Link from 'next/link'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ThemeChangeButton from '../components/ThemeChangeButton'

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo title="Starter Logo" />
        </Link>
        <Nav />
        <ThemeChangeButton />
      </div>
    </header>
  )
}
