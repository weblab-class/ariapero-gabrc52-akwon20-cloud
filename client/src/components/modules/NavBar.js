import React from "react";
import { Link } from "react-router-dom";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
const GOOGLE_CLIENT_ID = "981540632706-reasvi26mddkv30qenm2b8ka7ejrlqr0.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Unsubscribe</div>
      {/* <div className="NavBar-title u-inlineBlock">|</div>
      <div className="NavBar-title-red u-inlineBlock">Game</div>
      <div className="NavBar-title u-inlineBlock">book</div> */}
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        {/* {props.userId && (
          <Link to={`/profile/${props.userId}`} className="NavBar-link">
            Profile
          </Link>
        )}
        <Link to="/chat/" className="NavBar-link">
          Chat
        </Link>
        <Link to="/game/" className="NavBar-link">
          Game
        </Link>
        <Link to="/llm/" className="NavBar-link">
          LLM
        </Link> */}
        <GoogleOAuthProvider>
          {props.userId ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={props.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={props.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          )}
        </GoogleOAuthProvider>
      </div>
    </nav>
  );
};

export default NavBar;
