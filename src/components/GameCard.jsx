import React from "react";
import "./GameCard.css"
import { Link } from "react-router-dom";

function GameCard({ game }) {
    return (
        <Link to = {`/game/${game.id}`} className="game-card-link">
        <div className="game-card">
            <img src= {game.background_image} alt= {game} width={300} />
            <div className = "card-content">
                <h2>{game.name}</h2>
                <h3> {game.rating}</h3>
                <div>
                    {game.genres.map((genre) => (<p key ={genre.id} className="genre-tag">{genre.name} </p>))}

                </div>
            </div>
        </div>
        </Link>
    )

}
export default GameCard;