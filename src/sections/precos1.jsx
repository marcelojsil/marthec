import "../styles/precos1.css";

const Precos1 = () => {
  return (
    <section id="pricing">
      <h2>Nossos Planos</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Básico</h3>
          <p className="price">R$ 499</p>
          <ul>
            <li>Suporte Básico</li>
            <li>Manutenção preventiva</li>
            <li>1 Curso incluso</li>
          </ul>
          <button className="btn">Contratar</button>
        </div>

        <div className="pricing-card destaque">
          <h3>Profissional</h3>
          <p className="price">R$ 999</p>
          <ul>
            <li>Suporte Prioritário</li>
            <li>Automação completa</li>
            <li>3 Cursos inclusos</li>
          </ul>
          <button className="btn">Contratar</button>
        </div>

        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">R$ 1.499</p>
          <ul>
            <li>Consultoria dedicada</li>
            <li>Projetos sob medida</li>
            <li>Cursos ilimitados</li>
          </ul>
          <button className="btn">Contratar</button>
        </div>
      </div>
    </section>
  );
};

export default Precos1;
