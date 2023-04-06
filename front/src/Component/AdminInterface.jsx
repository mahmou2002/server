import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const AdminInterface = ({prod}) => {


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/rent/delete/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
       <div className="books">
        {prod.map((e) => (
          <div className="book">
            <img src={e.imageUrl} alt="img" />
            <h2>{e.name}</h2>
            <p>{e.description}</p>
            <span>${e.price}</span>
            <button className="delete" onClick={() => handleDelete(e.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${e.id}`}
                style={{ color: "inherit", textDecoration: "none" }}>
                Update
              </Link>
            </button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default AdminInterface
