import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NoteState>
  );
}

export default App;
