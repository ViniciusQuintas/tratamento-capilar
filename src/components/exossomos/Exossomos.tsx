import { Open_Sans as OpenSans } from 'next/font/google'
import Image from 'next/image'
import NewProduct from '@/assets/new_product.png'
import exossomos1 from '@/assets/exossomos1.webp'
import exossomos2 from '@/assets/exossomos2.png'
import exossomos3 from '@/assets/exossomos3.png'
import exossomos4 from '@/assets/exossomos4.png'
import Link from 'next/link'

const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})
export default function Exossomos() {
  return (
    <section className={`container mx-auto py-12 ${openSans.className}`}>
      <h2 className="mb-3 text-xl font-bold uppercase text-[#252527] sm:text-3xl">
        medicina DE TERAPIA regenerativa com exosssomos.
      </h2>
      <h2 className="text-xl font-medium uppercase text-[#252527] sm:text-3xl">
        Resultados de estudos da EXOCOBAIA, compartilhados conosco.
      </h2>
      <div className="mb-10 mt-14 flex flex-wrap items-center justify-center">
        <div className="flex">
          <Image
            src={NewProduct}
            alt="novo produto"
            className="z-10 -mr-20 -mt-5 max-w-20 self-start justify-self-start md:-mr-28 md:max-w-36 lg:-mr-20 lg:max-w-72 xl:-mt-16 xl:max-w-96"
          />
          <Image
            src={exossomos1}
            alt="tratamento com exossomos"
            className="max-w-72 md:max-w-full"
          />
        </div>
        <div className="mx-4 mt-6 sm:mt-0">
          <h3 className="text-2xl font-bold">6 MESES</h3>
          <h3 className="text-2xl font-bold">6 SESSÕES</h3>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around gap-y-7">
        <Image
          className="mx-2"
          src={exossomos2}
          alt="tratamento com exossomos"
        />
        <Image
          className="mx-2"
          src={exossomos3}
          alt="tratamento com exossomos"
        />
        <Image
          className="mx-2"
          src={exossomos4}
          alt="tratamento com exossomos"
        />
      </div>
      <div className="mt-16 text-center">
        <h2 className="mb-8 text-lg font-medium uppercase sm:text-2xl">
          Agende sua consulta de forma rápida e fácil. Clique no botão abaixo
          para agendar pelo WhatsApp.
        </h2>
        <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+tratamento+capilar&type=phone_number&app_absent=0">
          <button
            className={`rounded-full bg-gradient-to-r from-black to-zinc-300 uppercase text-white ${openSans.className} animate-scale px-4 py-2 text-xs xsm:text-sm sm:text-xl xl:px-16 xl:py-3 xl:text-2xl`}
          >
            agendar consulta
          </button>
        </Link>
      </div>
    </section>
  )
}
