import React, { useEffect, useState } from "react";
import Game from "./Game";
import "./container.css";

function Container(props) {
  const [gameInfo, setGameInfo] = useState(0);

  useEffect(() => {
    const constGameInfo = props.gameInfo;
    setGameInfo(constGameInfo);
  }, []);

  function returnGames() {
    const tempGameInfo = gameInfo;
    return tempGameInfo.map((value, index) => {
      return (
        <Game
          key={index + " " + value}
          name={value.name}
          premiere={value.premiere}
        />
      );
    });
  }

  return (
    <>
      
      <div className="containerElemArea">
      <h2>{props.month}</h2>
        <div className="containerElem">
          {gameInfo == 0 ? (
            <h3>W tym miesiącu nie wychodzi żadna gra</h3>
          ) : (
            returnGames()
          )}
        </div>
      </div>
    </>
  );
}

export default Container;
