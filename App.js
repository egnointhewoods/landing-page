import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Details from "./Components/Details";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}
