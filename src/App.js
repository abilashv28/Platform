import Login from './Components/LoginComponents/Login';
import Register from './Components/LoginComponents/Register';
import {BrowserRouter, Routes, Route,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
    {/* <Register /> */}
    <BrowserRouter>
        <Routes>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
        </Routes>
        <button onClick={()=>{window.location.href="/login"}} >Login</button> 
        <button onClick={()=>{window.location.href="/register"}} >Register</button> 
        </BrowserRouter>
    </div>
  );
} 

export default App;