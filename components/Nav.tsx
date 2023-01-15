import Link from "next/link";

export default function Nav() {
  const links = ['First Link', 'Second Link', 'Third Link', 'Fourth Link'];

  const renderLinks = () =>
    links.map((link) => {
      return (
        <Link key={link} href='#' className='mr-5 hover:text-indigo-600'>
          {link}
        </Link>
      );
    });

  return (
    <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
      {renderLinks()}
    </nav>
  );
}
