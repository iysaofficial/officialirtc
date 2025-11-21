import "./App.css";

import Irtcpage from "./pages/Irtcpage";
import ListOfWinner from "./pages/low/listlow";
import ListOfWinner2025 from "./pages/low/low2025";

// News
import ListNewsPage from "./pages/listnewspage";

// News Full
import News3 from "./pages/news/News3";
import News4 from "./pages/news/News4";
import News5 from "./pages/news/News5";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistHome from "./pages/registration/homeregist";
import HomeIndo from "./pages/registration/homeindo";
import HomeInter from "./pages/registration/homeinter";
import IndonesiaOnline from "./pages/registration/indo-online";
import IndonesiaOffline from "./pages/registration/indo-offline";
import InternationalOnline from "./pages/registration/inter-online";
import InternationalOffline from "./pages/registration/inter-offline";
import Thankyou from "./pages/registration/thankyou";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Irtcpage />} />
          <Route path="/low" element={<ListOfWinner />} />
          <Route path="/low2025" element={<ListOfWinner2025 />} />
          <Route path="/listnews" element={<ListNewsPage />} />
          <Route path="/News3" element={<News3 />} />
          <Route path="/News4" element={<News4 />} />
          <Route path="/News5" element={<News5 />} />

          <Route path="/homeregist" element={<RegistHome />} />
          <Route path="/homeindo" element={<HomeIndo />} />
          <Route path="/homeinter" element={<HomeInter />} />
          <Route path="/indo-online" element={<IndonesiaOnline />} />
          <Route path="/indo-offline" element={<IndonesiaOffline />} />
          <Route path="/inter-online" element={<InternationalOnline />} />
          <Route path="/inter-offline" element={<InternationalOffline />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
