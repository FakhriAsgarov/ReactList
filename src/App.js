import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Examples from "./Components/Examples";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
  <Route path="/" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/examples" element={<Examples/>}/>
<Route path="/about" element={<About/>}/>


      </Routes>
    
   
    </div>



  )
}

export default App;
