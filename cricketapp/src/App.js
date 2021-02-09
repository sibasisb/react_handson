import logo from './logo.svg';
import './App.css';
import {ListOfPlayers} from './Components/ListOfPlayers';
import {ScoreBelow70} from './Components/ScoreBelow70';
import { OddPlayers } from './Components/OddPlayers';
import { EvenPlayers } from './Components/EvenPlayers';
import { ListOfIndianPlayers } from './Components/ListOfIndianPlayers';

function App() {
  const players=[
    {name:"Mr. White",score:50},
    {name:"Mr. Michael",score:70},
    {name:"Mr. John",score:40},
    {name:"Mr. Ann",score:61},
    {name:"Mr. Eizabeth",score:61},
    {name:"Mr. Sachin",score:95},
    {name:"Mr. Dhoni",score:100},
    {name:"Mr. Virat",score:84},
    {name:"Mr. Jadeja",score:64},
    {name:"Mr. Raina",score:75},
    {name:"Mr. Rohit",score:80}
  ];

  const indianPlayers=[
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvraaj5",
    "Raina6"
  ];

  var flag=false;
  if(flag){
    return (
      <div>
        <h1>List of Players</h1>
        <ListOfPlayers players={players}/>
        <hr/>
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players}/>
      </div>
    );
  }
  else{
    return (
      <div>
        <div>
          <h1>Odd Players</h1>
          {OddPlayers(indianPlayers)}
          <hr/>
          <h1>Even Players</h1>
          {EvenPlayers(indianPlayers)}
        </div>
        <hr/>
        <div>
          <h1>List of Indian Players merged</h1>
          <ListOfIndianPlayers players={indianPlayers}/>
        </div>
      </div>
    );
  }
}

export default App;
