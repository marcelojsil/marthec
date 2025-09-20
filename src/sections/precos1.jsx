import "../styles/precos1.css";

const Precos1 = () => {
  return (
    <section id="pricing">
      <div className="pricing-max">
      <span className="tag-portifolio">Nossos preços</span>
        <h2>Planos e valores</h2>
        <p className="subtitle">
          Valores para desenvolvimento, para mais informações solicite um orçamento sem compromisso
        </p>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Site SPA - Single Page</h3>
          <p className="price">R$ 399</p>
          <ul>
            <li>Suporte Básico</li>
            <li>Manutenção preventiva</li>
            <li>1 Curso incluso</li>
          </ul>
          <button className="btn">Contratar</button>
        </div>

        <div className="pricing-card destaque">
          <h3>Site com 5 páginas</h3>
          <p className="price">R$ 499</p>
          <ul>
            <li>Suporte Prioritário</li>
            <li>Automação completa</li>
            <li>3 Cursos inclusos</li>
          </ul>
          <button className="btn">Contratar</button>
        </div>

        <div className="pricing-card">
          <h3>Landing Page</h3>
          <p className="price">R$ 599</p>
          <ul>
            <li>Consultoria dedicada</li>
            <li>Projetos sob medida</li>
            <li>Cursos ilimitados</li>
          </ul>
          <button className="btn">Contratar</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Precos1;
