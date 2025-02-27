import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/components.css";

const Link = ({ to, label }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <button onClick={handleClick} className="link" >
            {label}
        </button>
    );
};

export default Link;