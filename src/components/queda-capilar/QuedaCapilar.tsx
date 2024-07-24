import Link from 'next/link'
import maquina from '@/assets/maquina.png'
import { Open_Sans as OpenSans } from 'next/font/google'
import Image from 'next/image'
const openSans = OpenSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '800'],
})

export default function QuedaCapilar() {
  return (
    <section className="container mx-auto py-24">
      <div className="flex w-full items-center justify-between xsm:items-end xsm:justify-center">
        <div>
          <h2 className="fsm:text-2xl mb-1 text-xl font-thin tracking-wider text-[#252527] xsm:text-3xl sm:text-5xl xl:text-8xl">
            QUEDA CAPILAR
          </h2>
          <h2 className="fsm:text-2xl mb-8 text-xl font-thin tracking-wider text-[#252527] xsm:text-3xl sm:text-5xl xl:text-8xl">
            TEM TRATAMENTO
          </h2>
          <p
            className={`${openSans.className} mb-8 text-sm sm:max-w-[500px] sm:text-lg xl:max-w-[600px] xl:text-3xl`}
          >
            Trate a queda capilar com planos de tratamento exclusivos{' '}
            <span className="font-bold">padrão ouro</span>, que utilizam{' '}
            <span className="font-bold">tecnologias</span> associadas ao que
            existe de mais moderno na medicina:{' '}
            <span className="font-bold">MEDICINA REGENERATIVA</span>
          </p>
          <Link href="https://api.whatsapp.com/send/?phone=553138912160&text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+tratamento+capilar&type=phone_number&app_absent=0">
            <button
              className={`rounded-full bg-gradient-to-r from-black to-zinc-300 uppercase text-white ${openSans.className} animate-scale px-4 py-2 text-xs xsm:text-sm sm:text-xl xl:px-16 xl:py-3 xl:text-2xl`}
            >
              agendar consulta
            </button>
          </Link>
        </div>
        <Image
          src={maquina}
          alt="maquina"
          className="-mb-0 ml-0 max-w-[80px] xsm:max-w-[120px] sm:max-w-[150px] md:max-w-[200px] xl:ml-12 xl:max-w-[350px]"
        />
      </div>
    </section>
  )
}
