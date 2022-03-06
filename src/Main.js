import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import "./main.css";

function Main() {
  const myRefMonths = useRef([]);
  const myRefYears = useRef([]);
  const [sortBy, setSortBy] = useState(1);
  const [years, setYears] = useState([]);
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
      year: 2020,
    },
    {
      name: "Darkest Dungeon",
      premiere: "yes",
      day: 20,
      month: "May",
      year: 2021,
    },
    {
      name: "Darkest Dungeon",
      premiere: "yes",
      day: 1,
      month: "May",
      year: 2020,
    },
    {
      name: "Darkest Dungeon",
      premiere: "yes",
      day: 2,
      month: "May",
      year: 2020,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 3,
      month: "May",
      year: 2020,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 4,
      month: "May",
      year: 2020,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "May",
      year: 2020,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "March",
      year: 2020,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "March",
      year: 2027,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "March",
      year: 2026,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "March",
      year: 2025,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "March",
      year: 2024,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "March",
      year: 2023,
    },
    {
      name: "Darkest Dungeon",
      premiere: "no",
      day: 5,
      month: "March",
      year: 2022,
    },
  ];

  function executeScrollMonths(index) {
    console.log(myRefMonths.current.length);
    myRefMonths.current[index].scrollIntoView();
  }
  function executeScrollYears(index) {
    console.log(myRefYears.current.length);
    myRefYears.current[index].scrollIntoView();
  }

  function getAllYears() {
    let years = [];
    info.forEach((element) => {
      if (!years.includes(element.year)) {
        years.push(element.year);
      }
    });
    years.sort((a, b) => a - b);
    return years;
  }

  function getGamesFromYear(year) {
    let gamesFromYear = [];
    info.forEach((element) => {
      if (element.year == year) {
        gamesFromYear.push(element);
      }
    });
    return gamesFromYear;
  }

  function getGamesFromMonth(month) {
    let gamesFromMonth = [];
    info.forEach((element) => {
      if (element.month == month && element.year == new Date().getFullYear()) {
        gamesFromMonth.push(element);
      }
    });
    return gamesFromMonth;
  }

  function returnContainers() {
    myRefMonths.current = [];
    myRefYears.current = [];
    let containers = months;
    if (sortBy == 0) {
      return containers.map((element, index) => {
        return (
          <section
            ref={(el) => myRefMonths.current.push(el)}
            key={index + " " + element}
          >
            <Container gameInfo={getGamesFromMonth(element)} month={element} />
          </section>
        );
      });
    }
    if (sortBy == 1) {
      return years.map((element, index) => {
        return (
          <section
            ref={(el) => myRefYears.current.push(el)}
            key={index + " " + element}
          >
            <Container gameInfo={getGamesFromYear(element)} month={element} />
          </section>
        );
      });
    }
  }
  const returnMonths = () => {
    if (sortBy == 0) {
      return months.map((value, index) => {
        return (
          <button
            key={index + " " + value}
            onClick={() => executeScrollMonths(index)}
            className="link-buttons"
          >
            {value}
          </button>
        );
      });
    }
    if (sortBy == 1) {
      return years.map((value, index) => {
        return (
          <button
            key={index + " " + value}
            onClick={() => executeScrollYears(index)}
            className="link-buttons"
          >
            {value}
          </button>
        );
      });
    }
  };

  function changeSort(e) {
    if (e.target.value == "years") {
      setSortBy(1);
    }
    if (e.target.value == "months") {
      setSortBy(0);
    }
  }

  useEffect(() => {
    //console.log(getAllYears());

    setYears(getAllYears());
    console.log(years);
  }, []);

  return (
    <div className="main">
      <p>
        Years
        <input
          className="months-years"
          type="radio"
          name="months-years"
          value="years"
          onChange={changeSort}
        />
      </p>
      <p>
        Months
        <input
          className="months-years"
          type="radio"
          name="months-years"
          value="months"
          onChange={changeSort}
        />
      </p>
      {returnMonths()}
      <div className="">{returnContainers()}</div>
    </div>
  );
}

export default Main;
