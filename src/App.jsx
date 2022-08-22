import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import './App.css'


function App() {

  const styles = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20%"  
    }
    
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project1" element={<Project1 />}/>
      <Route path="/project2" element={<Project2 />}/>
      <Route path="*" element={<h1><pre style={styles}>Page not found 💀 </pre></h1>}/>
    </Routes>
  )
}

export default App