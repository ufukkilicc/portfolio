import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <BrowserRouter>
        <div className="container mt-24 mx-auto px-12 py-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
