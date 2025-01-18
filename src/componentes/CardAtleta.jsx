import React from "react";
import "../estilos/CardAtleta.css";

const CardAtleta = ({ atleta, adicionarFavorito }) => {
    return (
        <div className="card-atleta">
            <img src={atleta.strThumb || "https://via.placeholder.com/150"} alt={atleta.strPlayer} />
            <h3>{atleta.strPlayer}</h3>
            <p>{atleta.strTeam}</p>
            <button onClick={() => adicionarFavorito(atleta)}>Adicionar aos favoritos</button>
        </div>
    );
};

export default CardAtleta;