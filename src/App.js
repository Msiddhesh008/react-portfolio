import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavDrawer from "./Components/NavDrawer";
import Navbar from "./Components/Navbar";
import Email from "./Components/Email";
import Project from "./Components/Project";
import Meta from "./Components/Meta";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/meta" element={<Meta />} />
        </Routes>
        <NavDrawer />
      </BrowserRouter>
    </div>
  );
}

export default App;
