'use client';

import "../../styles/buttonLink.css";
import Link from "next/link";

export default function LinkButton({
  href = "#",
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  newTab = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const cn = [
    "rb-btn",
    `rb-${variant}`,
    `rb-${size}`,
    fullWidth ? "rb-full" : "",
    disabled ? "rb-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      role="button"
      aria-disabled={disabled ? "true" : undefined}
      onClick={handleClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={cn}
      {...rest}
    >
      {children}
    </Link>
  );
}

/*
// Exemplo de uso
export const Preview = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
    <LinkButton href="#" variant="primary">Orçamento</LinkButton>
    <LinkButton href="#" variant="outline">Portfólio</LinkButton>
    <LinkButton href="#" variant="ghost">Contato</LinkButton>
    <LinkButton href="#" variant="primary" size="lg" fullWidth disabled>Em breve</LinkButton>
  </div>
);
*/
