import { useState } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="authentication-container">
      {isLogin ? (
        <SignInForm
          onSignIn={() => {
            setIsLogin(!isLogin);
          }}
        />
      ) : (
        <SignUpForm
          onSignIn={() => {
            setIsLogin(!isLogin);
          }}
        />
      )}
    </div>
  );
};

export default Authentication;
