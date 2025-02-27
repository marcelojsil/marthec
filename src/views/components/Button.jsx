import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/components.css";

const Button = ({ to, label }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <button onClick={handleClick} className="button">
            {label}
        </button>
    );
};

export default Button;
