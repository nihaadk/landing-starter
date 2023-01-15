import Link from 'next/link';
import { ImFacebook, ImTwitter, ImInstagram, ImLinkedin } from 'react-icons/im';

export default function Footer() {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <span className='ml-3 text-2xl text-indigo-500'>Logo</span>
        </a>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2023 NextJs TailwindCSS Starter
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <Link className='text-gray-500 hover:text-indigo-600 zoom-in' href='#'>
            <ImFacebook />
          </Link>
          <Link className='ml-3 text-gray-500 hover:text-indigo-600 zoom-in' href='#'>
            <ImTwitter />
          </Link>
          <Link className='ml-3 text-gray-500 hover:text-indigo-600 zoom-in' href='#'>
            <ImInstagram />
          </Link>
          <Link className='ml-3 text-gray-500 hover:text-indigo-600 zoom-in' href='#'>
            <ImLinkedin />
          </Link>
        </span>
      </div>
    </footer>
  );
}
