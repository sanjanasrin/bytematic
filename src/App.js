import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import "./App.css";
import AboutUsPage from "./components/AboutUs/AboutUsPage";
import ITSolutions from "./components/ITSolutions/ITSolutions";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUS/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/itsolutions" element={<ITSolutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
