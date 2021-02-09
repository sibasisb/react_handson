import React from "react";

export const ListOfIndianPlayers=(props)=>{
    const [first,second,third,fourth,fifth,sixth]=props.players;
    const T20players=[first,second,third];
    const Ranjiplayers=[fourth,fifth,sixth];
    const IndianPlayers=[...T20players,...Ranjiplayers];
    return (
        <ul>
            {IndianPlayers.map(player=>{
                return (
                    <li><span> M : {player}</span></li>
                );
            })}
        </ul>
    );
}