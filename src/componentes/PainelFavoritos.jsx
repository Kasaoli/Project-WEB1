import React from "react";
import "../estilos/PainelFavoritos.css";

const PainelFavoritos = ({ favoritos }) => {
    return (
        <div className="painel-favoritos">
            <h2>Favoritos</h2>
            {favoritos.length === 0 ? (
                <p>Nenhum atleta favorito ainda.</p>
            ) : (
                <div className="favoritos-container">
                    {favoritos.map((atleta) => (
                        <div key={atleta.idPlayer} className="favorito-card">
                            <img src={atleta.strThumb || "https://via.placeholder.com/150"} alt={atleta.strPlayer} />
                            <h3>{atleta.strPlayer}</h3>
                            <p>{atleta.strTeam}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PainelFavoritos;