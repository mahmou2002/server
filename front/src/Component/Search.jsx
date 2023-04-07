import React,{useState} from 'react'
const Search = () => {
 
    return (
        <form className='searchForm'>
            <input type="text" className='search' placeholder="looking for ..."  />
            <button className='searchButton' type='submit' >&#x1F50E;</button>
        </form>
    )
}
export default Search