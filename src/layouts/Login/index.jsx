import React, { useState, memo, useEffect } from "react";
import Logo from "assets/trimble-logo.png";
import { useEnterClick } from "helper/customhooks";

const Login = ({ shouldRedirect, history, userAuthentication, resetUsers }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    resetUsers();
  }, []);

  useEffect(() => {
    if (shouldRedirect) {
      history.push("/home");
    }
  }, [shouldRedirect]);

  const deferredCall = () => {
    userAuthentication({ username, password });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEnterClick(deferredCall);

  return (
    <section>
      <div className="login">
        <div className="login-header">
          <img src={Logo} alt="Trimble" />
          {/* <BrandName /> */}
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form name="login">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => deferredCall()}
            >
              {isLoading ? "loading..." : "login"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
