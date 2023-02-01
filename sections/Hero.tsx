import Image from 'next/image'

export default function Hero() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="relative h-96 w-1/2 mb-5 object-contain z-10">
          <Image
            src="https://picsum.photos/200/300"
            alt="1"
            fill
          />
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-6xl sm:font-bold mb-4 text-8xl text-cyan-indigo">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed dark:text-gray-400 text-gray-800">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>
  )
}
