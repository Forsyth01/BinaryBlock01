import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes, useHistory, useLocation } from "react-router-dom";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Faqs from "./Pages/Faqs";
import Bibkcoinstaking from "./Pages/Bibkcoinstaking";
import Bibkcoin from "./Pages/Bibkcoin";
import { useEffect } from "react";
import NotFound from "./Components/NotFound";

function App() {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 

  return (
    <div className="App ">
      {/* <Navbar /> */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/bibkcoinstaking" element={<Bibkcoinstaking />} />
          <Route path="/bibkcoin" element={<Bibkcoin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
