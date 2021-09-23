import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.bg}>
      <div className={style.card}>
          <h3>Hi there! I'm Constanza</h3>
          <p>
          I'm a full stack developer in JavaScript. 

          </p>
        <p>
          This is a front end SPA I developed while learning React and Redux at Henry's Bootcamp. 
        </p>
          <ul>Some features of the project include: </ul>
          <li>Search Pokemons by name</li>
          <li>Add or remove Pokemons from favorites</li>
          <li>View details of a Pokemon</li>

          <p>There are still a few adjustments to be made but looks pretty cool considering it as a practice project</p>
          <p>Fun fact: I know a nothing about Pokemons</p>
      </div>
    </div>
  );
};

export default About;
