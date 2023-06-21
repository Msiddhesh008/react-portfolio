import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/react-portfolio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
