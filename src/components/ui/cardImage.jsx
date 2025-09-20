import "../../styles/ui.css";

const CardImage = ({ image, title, description, size = 80 }) => {
  return (
    <div className="service-card-image">
      <div className="image-card">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardImage;
