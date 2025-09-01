import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Work from "./pages/Work";
import Navbar from "./components/Navigation/Navbar";

const App = () => {

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
};

export default App;
