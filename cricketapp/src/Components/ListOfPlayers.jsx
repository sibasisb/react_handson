import React from 'react';

export const ListOfPlayers=(props)=>{
    const players=props.players;

    return (
        <div>
            <ul>
            {players.map(player=>{
                return (
                    <li>{player.name} <span> {player.score}</span></li>
                )
            })}
            </ul>
        </div>
    );
}