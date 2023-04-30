import { useState } from "react";
import style from "./searchBar.module.css";

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState ("")
   const handleChange =(e) => {
      setCharacter(e.target.value);
      }

const emptyText = () => {
   onSearch(character)
   setCharacter("")
}
   return (
      <div className={style.search}>
         <input placeholder= "Search by ID" type='search' value={character} onChange={handleChange} />
         <button className={style.btn} onClick={emptyText} >Add</button>
      </div>
   );
}
export default SearchBar;


