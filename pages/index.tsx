import Head from 'next/head'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Tailwind Starter</title>
        <meta name="description" content="Landing page starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Footer />
      </main>
    </>
  )
}
