import Image from 'next/image';
import "./style/cardImage.css";

const CardImage = ({ image, title, description, size = 80 }) => {
  return (
    <div className="service-card-image">
      <div className="image-card">
        <Image className="image"
          src={image}
          alt={title}
          width={size}
          height={size}
          unoptimized
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardImage;
