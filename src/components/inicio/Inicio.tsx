import LogoComponent from '@/components/header/LogoComponent'
import DesktopMenu from '@/components/header/DesktopMenu'
import MobileMenu from '@/components/header/MobileMenu'
import logoInicio from '@/assets/logo-inicio.png'
import letra from '@/assets/letra-inicio.png'
import Image from 'next/image'

export default function Inicio() {
  return (
    <section className="relative min-h-[70vh] w-screen overflow-hidden">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/cabelo.mp4" type="video/mp4" />
      </video>
      <div className="container relative mx-auto flex h-full flex-col">
        <header className="mt-2 py-3">
          <nav className="container mx-auto flex items-center justify-between">
            <LogoComponent contentStyle="h-auto max-w-full min-w-[140px]" />
            <DesktopMenu
              containerSyles="hidden items-center justify-between lg:flex"
              linkStyles="rounded-md p-2 text-base text-[#E8E8E8] transition duration-500 hover:text-black hover:bg-[#E8E8E8] mx-1"
            />
            <MobileMenu containerStyle="block ml-2 lg:hidden" />
          </nav>
        </header>
        <div className="mt-28 flex w-full flex-col items-end justify-end">
          <div className="mb-2 flex w-[130px] items-end justify-between xsm:w-[210px] sm:w-[400px]">
            <figure>
              <Image src={logoInicio} alt="logo" className="-ml-36 max-w-36" />
            </figure>
            <figure>
              <Image
                src={letra}
                alt="letra"
                className="w-[120px] object-cover opacity-55"
              />
            </figure>
          </div>
          <div className="text-white">
            <h1 className="text-4xl font-thin tracking-wider xsm:text-5xl sm:text-7xl">
              TRATAMENTO
            </h1>
            <h1 className="ml-12 text-6xl font-thin tracking-wider xsm:text-[90px] sm:ml-28 sm:text-9xl">
              CAPILAR
            </h1>
            <h2 className="ml-12 text-xl font-thin tracking-wider sm:ml-28 sm:text-5xl">
              Dra. Maria Carolina
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
