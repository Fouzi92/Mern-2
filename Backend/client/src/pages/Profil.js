import React, { useContext } from "react";
import Authentication from "../components/Log/Authentication";
import { UidContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Authentication signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/log.svg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
