import React from "react";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import MyRouter from "./router";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  
  return (
    <>
      <Header />
      <div className="container">
        {/* {isAuthenticated && ( */}
          <Sidebar />
        {/* )} */}
        <main className="main">
          <MyRouter />
        </main>
      </div>
    </>
  );
};

export default App;
