import Head from 'next/head'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import Image from 'next/image'

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

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">
                Before they sold out
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-gradient-to-r from-cyan-500 to-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div className="relative h-80 w-full object-contain">
                <Image src="https://picsum.photos/seed/picsum/200/300" alt="1" fill />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
