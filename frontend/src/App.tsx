import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cours } from "./routes/Cours";
import { Cursus } from "./routes/Cursus";
import { Main } from "./routes/Main";
import { Header } from "./componants/Header";
import { Footer } from "./componants/Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cursus" element={<Cursus />} />
          <Route path="/cours" element={<Cours />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
