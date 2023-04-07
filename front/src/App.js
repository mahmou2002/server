import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import axios from 'axios'
import AdminInterface from './Component/AdminInterface';
import UserInterface from './Component/UserInterface';
import Add from './Component/Add';
import Update from './Component/Update';
import Home from './Component/home/Home';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import './App.css';
import { auth } from "./firebase";
function App() {
 const [product,setProduct]= useState([]);
 const[toggle,setToggle]= useState(false);
 const handelToggle=()=>{
  setToggle(!toggle)
 }

 useEffect(() => {
  const fetshProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/product");
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetshProduct();
}, [toggle]);

const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);


  return (
   <div>
    <div>
  
    </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/adminSpace" element={<AdminInterface handeltoggle={handelToggle} prod={product} />} />
          <Route path="/" element={<UserInterface product={product}/>} />
          <Route path="/add" element={<Add handeltoggle={handelToggle}/>} />
          <Route path="/update/:id" element={<Update  handeltoggle={handelToggle}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home name={userName} />} />
        </Routes>

      </BrowserRouter>
    </div>
  </div> 
  );
}

export default App;
