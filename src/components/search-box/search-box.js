import React from 'react';
import ReactDOM from 'react-dom';
import './search-box.css';
const SearchBox =()=>{
  return (
    <div >
  
      <input className="form-control mr-sm-2 " type="search" placeholder="Поиск" aria-label="Search" size= "130" />
        <button className="btn btn-outline-success my-2 my-sm-0 search-input" type="submit"  >Поиск</button>
      
      
      </div>


  )
   

  
 


}

export default SearchBox;
