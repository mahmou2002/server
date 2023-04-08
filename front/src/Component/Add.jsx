import React, { useState } from 'react'
import axios from 'axios'
const add= ({data}) => {
 // const[namee,setNamee]=useState("")
 //const [description,setDescription]=useState("")
 //const[price,setPrice]=useState("")
 //const[imageUrl,setImageurl]=useState("")
 //const[category,setCategory]=useState("")
 //const[data,setdata]=useState([])
  //const submit =()=>{
    //axios.post("http://localhost:5002/api/product/update"+{data.id},{namee,description,price,imageUrl,category}).then((res)=>{
      //  setdata(res.data)
       
    //}).catch((err)=>{
      //  console.log(err);
    //})
   
//}
  return (
    <div className='update'>
      <ul>
       <input  type="text" placeholder='name'   />
       <input type="text" placeholder='description'    />
       <input type="text" placeholder='price'    />
       <input type="text" placeholder='imageUrl'   />
       <input type="text" placeholder='category'   />
        <input type="button" value="submit" />

      </ul>
    </div>
  )
}

export default add

//import React, { useState } from 'react'
//import axios from 'axios'
//const Update = ({id}) => {
  //[namee,setNamee]=useState("")
 // [description,setDescription]=useState("")
  //[price,setPrice]=useState("")
  //[imageUrl,setImageurl]=useState("")
  //[category,setCategory]=useState("")

  //const submit =()=>{
   //axios.post("http://localhost:5002/api/product/update"+{data.id},{namee,description,price,imageUrl,category}).then((res)=>{
      //  setdata(res.data)
       
    //}).catch((err)=>{
      //  console.log(err);
    //})
   
//}
   
//}
  //return (
    //<div className='add'>
      //<ul>
        //<h2>Enter the cordination</h2>
       //<input  type="text" placeholder='name'  onChange={(e)=>{setName(e.target.value)}}/>   
       //<input type="text" placeholder='description' onChange={(e)=>{setDescription(e.target.value)}}/>
       //<input type="text" placeholder='price'   onChange={(e)=>{setPrice(e.target.value)}}/>
       //<input type="text" placeholder='imageUrl'  onChange={(e)=>{setImageurl(e.target.value)}}/>
       //<input type="text" placeholder='category'  onChange={(e)=>{setCategory(e.target.value)}}/>
        //<input type="button" value="submit"/>

      //</ul>
    //</div>
  //)
//}