import { useEffect, useState } from "react";
import { CreateDeal, Header, Login, Modal, Sidebar, SingleDeal } from "../";

import "./app.css";
import axios from "axios";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://${name}.pipedrive.com/api/v1/deals?start=0&api_token=${token}`
        )
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err.message));
    }
    fetchData();
  }, []);

  console.log(data);

  return !token ? (
    <Login />
  ) : (
    <div className="app">
      <div className={`${open && "app-block"}`}>
        <Sidebar />
      </div>

      <div className="body">
        <div className={`${open && "app-block"}`}>
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <CreateDeal
                data={data}
                setData={setData}
                open={open}
                setOpen={setOpen}
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/deal/:id" element={<SingleDeal data={data} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// freelance-sandbox2

// 263ceebbc10839a7ddda223dcf375197450cc2b6
