type Props = {
  id: string;
  label: string;
  className?: string;
  innerClassName?: string;
  after?: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({
  id,
  label,
  className,
  innerClassName,
  after,
  children,
}: Props) {
  return (
    <section id={id} className={`section ${className ?? ""}`}>
      <div className={`wrap section-inner ${innerClassName ?? ""}`}>
        <h2 className="section-label">{label}</h2>
        <div className="section-body">{children}</div>
      </div>
      {after}
    </section>
  );
}
