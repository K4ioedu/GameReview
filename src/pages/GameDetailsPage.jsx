import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function GameDetailsPage(){
    const{id} = useParams();
    const[game, setGame] = useState(null);
    const [screenshots, setScreenshots] = useState([]);
    async function BuscarDetalhesDoJogo(){
        const apiKey = 'bba3d4ca7cfa4812a340f86fe4b2e274';
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        const data = await response.json();
        console.log("Detalhes recebidos da API:", data);
        setGame(data);
    }
    async function buscarScreenshots(){
        const Keyapi = 'bba3d4ca7cfa4812a340f86fe4b2e274';
        const resposta = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${Keyapi}`);
        const dados = await resposta.json();
        setScreenshots(dados.results);
    }
    useEffect(() => {
        BuscarDetalhesDoJogo();
        buscarScreenshots();
    }, [id]);
    if(game === null){
        return <p>Carregando...</p>;
    }
    return(
        <div className="details-page">
            <img src={game.background_image} alt={game.name} className="background-image" />

            <div className="details-content">
                <div className="left-column">
                    <h1>{game.name}</h1>
                    <h2>Descrição</h2>
                    <p>{game.description_raw}</p>
                </div>

                <div className="right-column">
                    <h2>Mídia</h2>
                    <div className="screenshots-grid"> 
                    {screenshots.map((screenshot) => (
                        <img key={screenshot.id} src={screenshot.image} alt={`Screenshot ${screenshot.id}`} className="screenshot-item" />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default GameDetailsPage;