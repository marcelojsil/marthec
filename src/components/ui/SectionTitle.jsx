

// Componente simples para títulos de seções
export default function SectionTitle({ children, align = "center", gradient = false }) {
  const cn = ["section-title", `section-title-${align}`, gradient ? "gradient-text-title" : ""]
    .filter(Boolean)
    .join(" ");

  return <h2 className={cn}>{children}</h2>;
}

// Exemplo de uso
export const Preview = () => (
  <div style={{ padding: "2rem" }}>
    <SectionTitle>Nosso Portfólio</SectionTitle>
    <SectionTitle align="start">Serviços</SectionTitle>
    <SectionTitle align="end" gradient>Impulsione seu negócio</SectionTitle>
  </div>
);