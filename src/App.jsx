import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Project4 from './pages/Project4'
import Project5 from './pages/Project5'
import Project6 from './pages/Project6'
import Project7 from './pages/Project7'
import Project8 from './pages/Project8'
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
      <Route path="/project3" element={<Project3 />}/>
      <Route path="/project4" element={<Project4 />}/>
      <Route path="/project5" element={<Project5 />}/>
      <Route path="/project6" element={<Project6 />}/>
      <Route path="/project7" element={<Project7 />}/>
      <Route path="/project8" element={<Project8 />}/>
      <Route path="*" element={<h1><pre style={styles}>Page not found 💀 </pre></h1>}/>
    </Routes>
  )
}

export default App