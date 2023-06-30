import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Team from "./Pages/Team";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
// import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App ">
      <Navbar />
      {/* <Nav/> */}  
      <div className="m-auto w-[95%] md:w-[75%] xl:w-[82%]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
