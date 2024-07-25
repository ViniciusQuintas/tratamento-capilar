import { Open_Sans as OpenSans } from 'next/font/google'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

export default function NovoTratamento() {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/exosso.mp4" type="video/mp4" />
      </video>
      <div className="relative flex h-screen flex-col items-center justify-center">
        <h2
          className={`text-4xl font-bold text-white xsm:text-5xl sm:text-6xl md:text-8xl ${openSans.className}`}
        >
          NOVO
        </h2>
        <h2
          className={`mb-6 text-4xl font-bold text-white xsm:text-5xl  sm:text-6xl md:text-8xl  ${openSans.className}`}
        >
          TRATAMENTO
        </h2>
        <h2
          className={`text-3xl font-thin text-white xsm:text-4xl sm:text-5xl md:text-7xl ${openSans.className}`}
        >
          EXOSSOMOS
        </h2>
      </div>
    </section>
  )
}
