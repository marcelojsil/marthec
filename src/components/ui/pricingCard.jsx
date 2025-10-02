// components/PricingCard.jsx
import "../../styles/precos1.css";
import { useState } from "react";
import Modal from "../modal";

const PricingCard = ({ title, price, promoPrice, features, destaque }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className={`pricing-card ${destaque ? "destaque" : ""}`}>
      <h3>{title}</h3>

      <div className="pricing-values">
        {promoPrice ? (
          <>
            <p className="price original">R$ {price}</p>
            <p className="price promo">R$ {promoPrice}</p>
          </>
        ) : (
          <p className="price">R$ {price}</p>
        )}
      </div>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button className="btn-informacoes" onClick={() => setIsModalOpen(true)}>
          escolher este plano
        </button>
    </div>

    <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        price={price}
        promoPrice={promoPrice}
        features={features}
         planId={title}
      />

      </>
  );
};

export default PricingCard;
