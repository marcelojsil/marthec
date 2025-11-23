// sections/Admin.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../components/supabaseClient";
import "../styles/admin.css";
import PainelWhatsApp from "./beckend/qrcode";

const Admin = () => {
  const [leads, setLeads] = useState([]);
  const [totalLeads, setTotalLeads] = useState(0);
  const [todayLeads, setTodayLeads] = useState(0);
  const [mostRequested, setMostRequested] = useState("-");
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("quero_este_plano")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao buscar leads:", error.message);
    } else {
      setLeads(data);
      calculateStats(data);
    }
  };

  const calculateStats = (data) => {
    // Total de leads
    setTotalLeads(data.length);

    // Leads do dia
    const today = new Date().toISOString().slice(0, 10);
    const todayCount = data.filter(
      (lead) => lead.created_at.slice(0, 10) === today
    ).length;
    setTodayLeads(todayCount);

    // Plano mais solicitado
    if (data.length > 0) {
      const counts = {};
      data.forEach((lead) => {
        counts[lead.plano] = (counts[lead.plano] || 0) + 1;
      });
      const topPlano = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setMostRequested(topPlano);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/admin"); // volta para login
  };

  return (
    <div className="admin-container">
      {/* Cabeçalho */}
      <div className="admin-header">
        <h1>Dashboard Administrativo</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </div>

      {/* Cards de Resumo */}
      <div className="cards-container">
        <div className="card">
          <h3>Total de Leads</h3>
          <p>{totalLeads}</p>
        </div>
        <div className="card">
          <h3>Leads de Hoje</h3>
          <p>{todayLeads}</p>
        </div>
        <div className="card">
          <h3>Plano mais solicitado</h3>
          <p>{mostRequested}</p>
        </div>
      </div>

      {/* Tabela */}
      <section className="admin-section">
        <h2>Interessados nos Planos</h2>
        {leads.length === 0 ? (
          <p>Nenhum interesse registrado ainda.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>WhatsApp</th>
                <th>Email</th>
                <th>Plano</th>
                <th>Preço</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.nome}</td>
                  <td>{lead.whatsapp}</td>
                  <td>{lead.email}</td>
                  <td>{lead.plano}</td>
                  <td>R$ {lead.preco}</td>
                  <td>{new Date(lead.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      <PainelWhatsApp />
    </div>
  );
};

export default Admin;
