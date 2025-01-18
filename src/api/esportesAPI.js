import axios from "axios";

const API_BASE = "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php";

export const buscarAtletas = async (nome) => {
    const response = await axios.get(`${API_BASE}?p=${nome}`);
    return response.data.player || [];
};