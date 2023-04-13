
import './App.css';
import Login from"../src/pages/login/login"
import {BrowserRouter  as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
function App() {
  return (
    <div className="App">
      	 <Router>
			<Routes>
                <Route path ="/" element={<Home/>}/>
                
                <Route path ="/Login" element={<Login/>}/>
             
               
            </Routes>
         </Router>
    
    </div>
  );
}

export default App;
