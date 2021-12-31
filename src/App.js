import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Config from "./pages/Config";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/config" element={<Config />} />
    </Routes>
  );
}

export default App;
