import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserInterface = ({product}) => {
  const navigate=useNavigate()

  return (
    <div>
        <nav>
            
            <ul>
                <img  className='image' src="data:image/jpeg;base64,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" alt="imga"/>
                <li className="admin" onClick={()=> navigate("/adminSpace")}>adminSpace</li>
                <li>home</li>
                <li>contact</li>
               
            </ul>
        </nav>
    
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