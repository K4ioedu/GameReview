import React from "react";
import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router-dom";
import "./GameCard.css"
import { Link } from "react-router-dom";

function GameCard({ game }) {
    return (
        <Link to = {`/game/${game.id}`}>
        <div className="game-card">
            <h2>{game.name}</h2>
            <h3> {game.rating}</h3>
            {game.genres.map((genre) => (<p key ={genre.id}>{genre.name} </p>))}
            <img src= {game.background_image} alt= {game} width={300} />
        </div>
        </Link>
    )

}
export default GameCard;