import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";
import NavContext from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Stairs>
      <NavContext>
        <App />
      </NavContext>
    </Stairs>
  </BrowserRouter>
);
