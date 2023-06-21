import "./App.css";
import AppMock from "./components/AppMock";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovingImageDiv from "./components/MovingImageDiv";
import Solution from "./components/Solution";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MovingImageDiv />
      <Solution />
      <AppMock />
      <Clients />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
