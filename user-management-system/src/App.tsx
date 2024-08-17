import React from "react";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import MyRouter from "./router";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main">
          <MyRouter />
        </main>
      </div>
    </>
  );
};

export default App;
