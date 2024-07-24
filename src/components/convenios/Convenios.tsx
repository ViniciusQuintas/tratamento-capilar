import Agros from '@/assets/convenios/agros.webp'
import Imas from '@/assets/convenios/imas.webp'
import Plamuv from '@/assets/convenios/plamuv.webp'
import Unimed from '@/assets/convenios/unimed.webp'
import Image from 'next/image'
import { Open_Sans as OpenSans } from 'next/font/google'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

const planos = [
  { src: Agros, alt: 'Plano de convênio Agros' },
  { src: Imas, alt: 'Plano de convênio Imas' },
  { src: Plamuv, alt: 'Plano de convênio Plamuv' },
  { src: Unimed, alt: 'Plano de convênio Unimed' },
]

export default function Convenios() {
  return (
    <section className="container mx-auto w-full flex-col py-16">
      <div className="flex flex-col items-center">
        <h1 className="mb-5 text-2xl font-thin uppercase tracking-wider text-[#252527] xsm:text-4xl">
          Convênios
        </h1>
        <h2
          className={`mb-5 text-lg font-medium sm:text-xl ${openSans.className} uppercase`}
        >
          Confira os convênios aceitos pela nossa clínica.
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-x-5 xsm:justify-evenly lg:justify-center 2xl:flex-nowrap">
        {planos.map((plano, index) => (
          <Image
            src={plano.src}
            alt={plano.alt}
            key={index}
            className="my-3 w-full max-w-40 object-cover"
            placeholder="blur"
          />
        ))}
      </div>
      <h3
        className={`mt-5 ${openSans.className} font-bold uppercase sm:text-center`}
      >
        <span className="font-semibold text-red-700">*</span> Os planos cobrem
        apenas consultas e alguns exames. Favor consultar quais.
      </h3>
    </section>
  )
}
