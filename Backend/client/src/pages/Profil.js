import React from "react";
import Authentication from "../components/Log/Authentication";

const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Authentication signin={false} signup={true} />
        <div className="img-container">
          <img src="./img/log.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
