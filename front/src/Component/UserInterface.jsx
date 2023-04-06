import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserInterface = ({product}) => {
  const navigate=useNavigate()

  return (
    <div>
     <div> <h2 className="logo" onClick={()=> navigate("/adminSpace")}>Admin</h2></div>
      <div className="books">
        {product.map((e) => (
          <div key={e.id} className="book">
            <img src={e.imageUrl} alt="img" />
            <h2>{e.name}</h2>
            <p>{e.description}</p>
            <span>${e.price}</span>
            </div>
            ))}
        </div>

    </div>
  )
}

export default UserInterface