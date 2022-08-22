import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project1" element={<Project1 />}/>
      <Route path="/project2" element={<Project2 />}/>
    </Routes>
  )
}

export default App