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

  

  return (
    <>
     
      <div className="">
        <Container month="May"/>
        <Container month="June"/>
        <Container month="July"/>
      </div>
    </>
  );
}

export default Main;
