import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import axios from 'axios'
import AdminInterface from './Component/AdminInterface';
import UserInterface from './Component/UserInterface';
import Add from './Component/Add';
import Update from './Component/Update';
import './App.css';
function App() {
 const [product,setProduct]= useState([]);
 const[toggle,setToggle]= useState(false);


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




  return (
   <div>
    <div>
  
    </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/adminSpace" element={<AdminInterface prod={product} />} />
          <Route path="/" element={<UserInterface product={product}/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
          
        </Routes>

      </BrowserRouter>
    </div>
  </div> 
  );
}

export default App;
