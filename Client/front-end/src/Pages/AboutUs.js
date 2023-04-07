import React from 'react';
import { useLocation } from "react-router-dom";

const AboutUs = () => {

    const location = useLocation();
    const searchInput = location.state;
    return (
        <div>
            <h1>Resultados de búsqueda para ${searchInput} </h1>
        </div>
    );
}

export default AboutUs;
