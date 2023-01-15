import Link from 'next/link';
import ThemeChangeButton from '../components/ThemeChangeButton';

export default function Header() {
 return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          href='#'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <span className='ml-3 text-3xl text-indigo-500'>Logo</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link href='#' className='mr-5 hover:text-indigo-600'>
            First Link
          </Link>
          <Link href='#' className='mr-5 hover:text-indigo-600'>
            Second Link
          </Link>
          <Link href='#' className='mr-5 hover:text-indigo-600'>
            Third Link
          </Link>
          <Link href='#' className='mr-5 hover:text-indigo-600'>
            Fourth Link
          </Link>
        </nav>
        <ThemeChangeButton/>
      </div>
    </header>
  );
}
