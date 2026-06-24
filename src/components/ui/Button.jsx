import "./Button.css";

export default function Button({
  children,
  variant = "fill",
  href,
  onClick,
  type = "button",
}) {
  const buttonClass = `neo-btn neo-btn--${variant}`;

  const buttonContent = (
    <>
      <span className="neo-btn__text">{children}</span>
      <span className="neo-btn__icon">→</span>
    </>
  );

  if (href) {
    return (
      <div className="neo-btn-shell">
        <a
          className={buttonClass}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
        >
          {buttonContent}
        </a>
      </div>
    );
  }

  return (
    <div className="neo-btn-shell">
      <button
        className={buttonClass}
        type={type}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    </div>
  );
}