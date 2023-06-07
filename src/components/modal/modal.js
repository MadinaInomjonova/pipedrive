import { CloseOutlined } from "@mui/icons-material";
import "./modal.css";
import { useState } from "react";
import axios from "axios";

const Modal = ({ closeModal }) => {
  const [state, setState] = useState({
    person: "",
    org: "",
    title: "",
    value: "",
    date: "",
    phone: "",
    email: "",
  });
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const changeInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://${name}.pipedrive.com/api/v1/deals?api_token=${token}`, {
        title: state.title,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title">
          <p>Add deal</p>
          <CloseOutlined onClick={() => closeModal(false)} />
        </div>

        <div className="body">
          <div>
            <label>
              Contact person
              <input
                type="text"
                name="person"
                value={state.name}
                onChange={changeInput}
              />
            </label>
            <label>
              Organization
              <input
                type="text"
                name="org"
                value={state.org}
                onChange={changeInput}
              />
            </label>
            <label>
              Title
              <input
                type="text"
                name="title"
                value={state.title}
                onChange={changeInput}
              />
            </label>
            <label>
              Value
              <div className="input-group">
                <input
                  type="text"
                  name="value"
                  value={state.value}
                  onChange={changeInput}
                />
                <p>US Dollar (USD)</p>
              </div>
            </label>
            <label>
              Expected close date
              <input
                type="date"
                name="date"
                value={state.date}
                onChange={changeInput}
              />
            </label>
          </div>

          <div>
            <p>
              PERSON <span></span>
            </p>
            <label>
              Phone
              <input
                type="text"
                name="phone"
                value={state.phone}
                onChange={changeInput}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={changeInput}
              />
            </label>
          </div>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={sendData}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
