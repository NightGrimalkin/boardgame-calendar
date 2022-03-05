import React, { useEffect, useState } from "react";
import "./game.css";

function Game(props) {
  return (
    <div className="gameElem">
      <h3>{props.name}</h3>
      <h4>{props.premiere}</h4>
    </div>
  );
}

export default Game;
