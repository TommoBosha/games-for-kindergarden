
import { TikTakTok } from "./components/TikTakTok";
import { useState } from "react";

import "./App.css";
import { CardGame } from "./components/CardGame";



function App() {
  const [showCardGame, setShowCardGame] = useState(true);

  return (
    <div className="App">
    
      <div className="game-buttons">
        <button className="button-restart" onClick={() => setShowCardGame(true)}>Показати Картки</button>
        <button className="button-restart" onClick={() => setShowCardGame(false)}>Показати Хрестики - Нулики</button>
      </div>

      {showCardGame ? <CardGame /> : <TikTakTok />}
    </div>
  );
}

export default App;
