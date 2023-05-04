import Login from"../src/pages/login/login"
import {BrowserRouter  as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Hotel from "./pages/types/hotel";
function App() {
  return (
    <>
      	 <Router>
			        <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/Login" element={<Login/>}/> 
                <Route path="/Hotel" element={<Hotel/>}/>
            </Routes>
         </Router>

    </>
  );
}

export default App;
