import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cours } from "./routes/Cours";
import { Cursus } from "./routes/Cursus";
import { Main } from "./routes/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cursus" element={<Cursus />} />
        <Route path="/cours" element={<Cours />} />
      </Routes>
    </Router>
  );
}

export default App;
