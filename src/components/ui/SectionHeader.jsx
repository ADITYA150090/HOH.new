export default function SectionHeader({ eyebrow, title, children, dark = false }) {
  return (
    <div className="section-header reveal">
      <div className="label">{eyebrow}</div>
      <h2 className={dark ? "section-title dark" : "section-title"}>{title}</h2>
      {children && <p className={dark ? "section-copy dark" : "section-copy"}>{children}</p>}
    </div>
  );
}
