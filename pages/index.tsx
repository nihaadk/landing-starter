import Head from 'next/head'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import Content1 from '../sections/Content1'
import Content2 from '../sections/Content2'
import Feature from '../sections/Feature'
import Divider from '../sections/Divider'
import UiButton from '../components/UiButton'


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
        <UiButton color="rose">Read Me!</UiButton>
        <UiButton color="indigo">Read Me!</UiButton>
        {/* <Content1 /> */}
        <Divider/>
        {/* <Content2 />
        <Feature />
        <Footer /> */}
      </main>
    </>
  )
}
