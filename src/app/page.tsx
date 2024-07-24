import Convenios from '@/components/convenios/Convenios'
import Inicio from '@/components/inicio/Inicio'
import QuedaCapilar from '@/components/queda-capilar/QuedaCapilar'
import Video from '@/components/section_video/Video'
import Barba from '@/assets/barba.webp'
import Cabelo from '@/assets/cabelo.webp'
import Cabelo2 from '@/assets/cabelo2.webp'
import Cabelo3 from '@/assets/cabelo3.webp'
import Cabelo4 from '@/assets/cabelo4.webp'
import Cabelo5 from '@/assets/cabelo5.webp'
import AntesDepois from '@/components/antes-e-depois/AntesDepois'
import SectionHeader from '@/components/antes-e-depois/SectionHeader'
import ImageGallery from '@/components/antes-e-depois/ImageGallery'
import NovoTratamento from '@/components/novo-tratamento/NovoTratamento'
import Exossomos from '@/components/exossomos/Exossomos'
import Depoimento from '@/components/depoimentos/Depoimento'

const images = [
  {
    src: Barba,
    alt: 'barba antes e depois do tratamento contra queda capilar',
  },
  {
    src: Cabelo,
    alt: 'cabelo antes e depois do tratamento contra queda capilar',
  },
  {
    src: Cabelo2,
    alt: 'cabelo antes e depois do tratamento contra queda capilar',
  },
  {
    src: Cabelo3,
    alt: 'cabelo antes e depois do tratamento contra queda capilar',
  },
  {
    src: Cabelo4,
    alt: 'cabelo antes e depois do tratamento contra queda capilar',
  },
  {
    src: Cabelo5,
    alt: 'cabelo antes e depois do tratamento contra queda capilar',
  },
]

const depoimentos = [
  {
    texto:
      '"Muito obrigada pelo atendimento de todos na clínica. Senti muita confiança na consulta, acolhida no local e sigo feliz com os resultados, mesmo antes de finalizar o tratamento."',
  },
  {
    texto:
      '"Meus elogios são verdadeiros, quem me conhece sabe que não jogo confetes atoas. Bendita a hora que me indicaram a clínica! A Dra, Maria Carolina faz um trabalho com responsabilidade e sempre focado em nossa satisfação. Simplesmente amei meu tratamento."',
  },
  {
    texto:
      '"Eu achava que meu caso não tinha solução. Quando iniciei o tratamento, depois de consultar com a Dra. Maria (a primeira que fez todos os exames), senti as esperanças renovadas. Cumpri todo o plano de tratamento proposto pela dra e só tenho uma coisa a dizer: ainda bem que não desisti!"',
  },
  {
    texto:
      '"As pessoas estão me parando na rua e perguntando se fiz implante capilar. Cheio de alegrias conto que fiz um tratamento que teve como resultado, este (novo) cabelo!"',
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden lg:max-w-full">
      <Inicio />
      <QuedaCapilar />
      <Video />
      <Convenios />
      <AntesDepois contentStyle="container mx-auto flex-col pt-12 pb-14">
        <SectionHeader
          style="mb-7"
          title="Antes e Depois"
          subtitle="RESULTADOS REAIS QUE COMPROVAM A EFICÁCIA E A QUALIDADE DOS NOSSOS SERVIÇOS"
        />
        <ImageGallery images={images} />
      </AntesDepois>
      <NovoTratamento />
      <Exossomos />
      <Depoimento
        contentStyle="container mx-auto flex w-full flex-col items-center justify-center py-6 pb-32 lg:flex-row"
        depoimentos={depoimentos}
      />
    </main>
  )
}
