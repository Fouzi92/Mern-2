import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpFrom from "./SignUpFrom";

const Authentication = () => {
  const [signUpModal, setSignUpModal] = useState(true);
  const [signInModal, setSignInModal] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignInModal(false);
      setSignUpModal(true);
    }
  };

  return (
    <div className="connection-from">
      <div className="from-container">
        <ul>
          <li onClick={handleModals} id="register">
            S'inscrire
          </li>
          <li onClick={handleModals} id="login">
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpFrom />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Authentication;
