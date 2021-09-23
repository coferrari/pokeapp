import React from "react";
import Logo from "../../img/pokelogo.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div>
        <Link to="/home">
          <img src={Logo} width="300" height="300" alt="img not found" />
        </Link>
      </div>
    </>
  );
};

export default Welcome;
