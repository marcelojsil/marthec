// components/Modal.jsx
import { useState } from "react";
import { supabase } from "./supabaseClient"; // conexão separada
import "../styles/modal.css";

const Modal = ({ isOpen, onClose, title, price, promoPrice, planId }) => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    const { error } = await supabase.from("quero_este_plano").insert([
      {
        nome: formData.nome,
        whatsapp: formData.whatsapp,
        email: formData.email,
        //plano: title,
        plano: planId,      
        preco: promoPrice || price,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Erro ao enviar, tente novamente.");
    } else {
      setSuccessMsg("Solicitação enviada com sucesso! 🚀");
      setFormData({ nome: "", whatsapp: "", email: "" });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/*<button className="modal-close" onClick={onClose}>
          &times;
        </button>*/}
        
        <h2>Mais detalhes sobre este plano</h2>
        <p><strong>Plano: {title}</strong></p>

        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            WhatsApp
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {successMsg && <p className="success">{successMsg}</p>}
      </div>
    </div>
  );
};

export default Modal;
