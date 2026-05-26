export default function Button({ children, variant = "fill", href, onClick, type = "button" }) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a className={className} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
        <span className="btn-arrow">-&gt;</span>
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
      <span className="btn-arrow">-&gt;</span>
    </button>
  );
}
