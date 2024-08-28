import Header from "./components/Layout/Header";
import MyRouter from "./router";
import SwiperCompo from "./components/Layout/SwiperCompo";

const App = () => {
  return (
    <>
      <Header />
      <SwiperCompo />
      <div className="container">
        <main className="main">
          <MyRouter />
        </main>
      </div>
    </>
  );
};

export default App;
