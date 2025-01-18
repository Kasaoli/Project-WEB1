import { useState } from 'react'
import { buscarAtletas } from "./api/esportesAPI";
import CardAtleta from "./componentes/CardAtleta";
import PainelFavoritos from "./componentes/PainelFavoritos";

const App = () => {
  const [nome, setNome] = useState("");
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const handlePesquisa = async () => {
    const resultados = await buscarAtletas(nome);
    setAtletas(resultados);
  };

  const adicionarFavorito = (atleta) => {
    if (!favoritos.find((fav) => fav.idPlayer === atleta.idPlayer)){
      setFavoritos([...favoritos, atleta]);
    }
  };
  
  return (
    <div className="App">
      <h1>Pesquisa de Atletas</h1>
      <input type="text" placeholder="Digite o nome do atleta" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <button onClick={handlePesquisa}>Pesquisar</button>

      <div className="resultados">
        {atletas.map((atleta) => (
          <CardAtleta key={atleta.idPlayer} atleta={atleta} adicionarFavorito={adicionarFavorito} />
        ))}
      </div>

      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
};

export default App;