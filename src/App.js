import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  BrowserRouter,
  Route,
  Routes,
  useHistory,
  useLocation,
} from "react-router-dom";
import Team from "./Pages/Team";
import Home from "./Pages/Home";
import Faqs from "./Pages/Faqs";
import Bibkcoinstaking from "./Pages/GenesisStaking";
import Bibkcoin from "./Pages/BibkStaking";
import { useEffect } from "react";
import NotFound from "./Components/NotFound";
import Withdraw from "./Pages/Withdraw";
import Faq2 from "./Pages/Faq2";
import With2 from "./Pages/With2";
import Home2 from "./Pages/Home2";
import BibkStaking from "./Pages/BibkStaking";
import GenesisStakingtaking from "./Pages/GenesisStaking";

function App() {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="">
      <div className="">
        {/* {<Navbar />} */}
        <div className="">
          <Routes>
            <Route path="/" element={<Home2 />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/team" element={<Team />} />
            <Route path="/faqs" element={<Faqs />} />
            {/* <Route path="/faqs" element={<Faq2 />} /> */}
            {/* <Route path="/faqs" element={<Faqs />} /> */}
            <Route path="/app" element={<GenesisStakingtaking />} />  
            <Route path="/bibkstaking" element={<BibkStaking />} /> 
            {/* <Route path="/with" element={<With2 />} />  */}
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
     
      </div>
    </div>
  );
}

export default App;
