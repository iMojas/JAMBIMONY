import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Contact_us from "./pages/contact_us/Contact_us";
import Festivals from "./pages/festivals/Festivals";
import StateUt from "./pages/state_ut/StateUt";
import HeritageSites from "./pages/heritage_sites/HeritageSites";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/error/Error";
import Varanasi from "./pages/varanasi/Varanasi";
import CommingSoon from "./pages/comming_soon/CommingSoon";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact_us />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/state_ut" element={<StateUt />} />
        <Route path="/heritage_site" element={<HeritageSites />} />
        <Route path="/blog" element={<CommingSoon />} />
        <Route path="/gallery" element={<CommingSoon />} />
        <Route path="/travel_with_us" element={<CommingSoon />} />
        <Route path="/varanasi" element={<Varanasi />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
