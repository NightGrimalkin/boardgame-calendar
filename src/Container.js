import React, { useEffect, useState } from "react";
import Game from "./Game";
import "./container.css";

function Container(props) {
  useEffect(() => {
    const gameInfo = props.gameInfo;
    console.log(gameInfo);
  });

  return (
    <>
      <h2>{props.month}</h2>
      <div className="containerElem">
        <Game name="darkest" premiere="yes" />
        <Game name="darkest" premiere="yes" />
      </div>
    </>
  );
}

export default Container;
