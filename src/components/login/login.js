import { useState } from "react";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [state, setState] = useState({ name: "", token: "" });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const sendUserData = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://${state.name}.pipedrive.com/api/v1/deals/2?api_token=${state.token}`
      )
      .then((res) => {
        localStorage.setItem("name", state.name);
        localStorage.setItem("token", state.token);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <img
        src="https://logo-download.com/wp-content/data/images/svg/Pipedrive-logo.svg"
        alt="logo"
      />
      <input
        onChange={handleInputChange}
        name="name"
        value={state.name}
        type="text"
        placeholder="Company name"
      />
      <input
        onChange={handleInputChange}
        name="token"
        value={state.token}
        type="text"
        placeholder="Token"
      />
      <button onClick={sendUserData}>Send</button>
    </div>
  );
};

export default Login;
