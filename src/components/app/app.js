import { CreateDeal, Header, Sidebar } from "../";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="body">
        <Header />
        <CreateDeal />
      </div>
    </div>
  );
};

export default App;
