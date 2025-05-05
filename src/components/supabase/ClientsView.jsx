import { useEffect, useState } from 'react';
import { supabase } from './Supabase'; // Ajuste o caminho conforme necessário
import { useNavigate } from 'react-router-dom';
import "../../css/components.css"

const ClientsView = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase.from('cdt_clientes').select('*');
      if (error) {
        console.error('Erro ao buscar dados:', error);
      } else {
        setLeads(data);
      }
      setLoading(false);
    };

    fetchLeads();
  }, []);

  return (
    <div className="leads-list">
      <h2>Lista de Leads</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Domínio</th>
              <th>Cidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.cliente}</td>
                <td>{lead.dominio}</td>
                <td>{lead.cidade}</td>
                <td>
                  <button onClick={() => navigate(`/ClientesEdit/${lead.id}`)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientsView;
