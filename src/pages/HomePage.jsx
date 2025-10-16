import React from "react";
import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import "./HomePage.css";

function HomePage(){
    const [games, setGames] = useState([]);
    async function BuscarJogos(){
        const apiKey = 'bba3d4ca7cfa4812a340f86fe4b2e274'
        const busca = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
        const dados = await busca.json();
        setGames(dados.results);   
        console.log(dados.results);
    }
    useEffect(() => {
        BuscarJogos();
    }, []);
    return (
        <div className ="home-container">
             <h1>Explore o Universo Gamer</h1>
             <p>As últimas análises da comunidade</p>

            <div className ="home-page">
            {games.map((game)=> (
            <GameCard key = {game.id} game={game} />

        ))
    }
            </div>

        </div>
    )
}
export default HomePage;