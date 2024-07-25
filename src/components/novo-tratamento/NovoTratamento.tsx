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
        <source src="/exo.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
