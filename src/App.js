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
import Bibkcoinstaking from "./Pages/Bibkcoinstaking";
import Bibkcoin from "./Pages/Bibkcoin";
import { useEffect } from "react";
import NotFound from "./Components/NotFound";
import Withdraw from "./Pages/Withdraw";
import Faq2 from "./Pages/Faq2";

function App() {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="">
      <div className="">
        <Navbar />
        <div className="m-auto xl:w-[90%] w-[95%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faqs" element={<Faq2 />} />
            {/* <Route path="/faqs" element={<Faqs />} /> */}
            <Route path="/app" element={<Bibkcoinstaking />} />
            <Route path="/bibkcoin" element={<Bibkcoin />} />
            <Route path="/with" element={<Withdraw />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
