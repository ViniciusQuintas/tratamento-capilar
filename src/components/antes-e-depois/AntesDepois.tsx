interface Props {
  contentStyle: string
  children: React.ReactNode
}

export default function AntesDepois({ contentStyle, children }: Props) {
  return (
    <section className="w-full">
      <div className={`${contentStyle}`}>{children}</div>
    </section>
  )
}
