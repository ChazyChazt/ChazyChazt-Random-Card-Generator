/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function aleatoriNumber() {
    let arraynumber = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomnumber = Math.floor(Math.random() * arraynumber.length);
    return arraynumber[randomnumber];
  }

  function aleatoriIcon() {
    let arrayIcon = ["♦", "♥", "♠", "♣"];
    let randomIcon = Math.floor(Math.random() * arrayIcon.length);
    return arrayIcon[randomIcon];
  }

  //write your code here
  const iconUp = document.getElementById("iconUp");
  const numberElement = document.getElementById("number");
  const iconDown = document.getElementById("iconDown");

  const number = aleatoriNumber();
  const icon = aleatoriIcon();

  let color = "black";
  if (icon === "♦" || icon === "♥") {
    color = "red";
  }

  numberElement.innerHTML = number;
  iconUp.innerHTML = icon;
  iconDown.innerHTML = icon;

  iconUp.style.color = color;
  iconDown.style.color = color;

  console.log("Hello Rigo from the console!");
};
