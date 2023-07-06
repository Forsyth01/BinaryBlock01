import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Faqs from "./Pages/Faqs";

function App() {
  return (
      <div className="App ">
        <Navbar />
        <div className="m-auto w-[95%] md:w-[75%] xl:w-[82%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
