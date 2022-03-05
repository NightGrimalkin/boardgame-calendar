import React, { useEffect, useState } from "react";
import Container from "./Container";

function Main() {
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const info = [
    {
      name: "Darkest Dungeon",
      premiere: "yes",
      day: 20,
      month: "May",
      year: "2020",
    },
    {
      name: "Darkest Dungeon",
      premiere: "yes",
      day: 1,
      month: "May",
      year: "2020",
    },
    {
      name: "Darkest Dungeon",
      premiere: "yes",
      day: 2,
      month: "May",
      year: "2020",
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 3,
      month: "May",
      year: "2020",
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 4,
      month: "May",
      year: "2020",
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "May",
      year: "2020",
    },
  ];

  function getGamesFromMonth(month) {
    let gamesFromMonth = [];
    info.forEach((element) => {
      if (element.month == month) {
        gamesFromMonth.push(element);
      }
    });
    return gamesFromMonth;
  }

  function returnContainers() {
    let containers = months;
    let gamesFromMonth;
    return containers.map((element, index) => {
      return (
        <Container
          key={index + " " + element}
          gameInfo={getGamesFromMonth(element)}
          month={element}
        />
      );
    });
  }
  const returnMonths = () => {
    return months.map((value, index) => {
      return <input key={index + " " + value} type="button" value={value} />;
    });
  };

  useEffect(() => {
    //console.table(getGamesFromMonth("May"));
  });

  return (
    <>
      Years
      <p>
        <input type="radio" name="months-years" value="years" />
      </p>
      Months
      <p>
        <input type="radio" name="months-years" value="months" />
      </p>
      {returnMonths()}
      <div className="">{returnContainers()}</div>
    </>
  );
}

export default Main;
