import Card from '../Card.component/Card.jsx';
import style from "./Cards.module.css";
import SearchBar from "../Search.component/SearchBar";

const random = () => {
    return Math.floor(Math.random() * 826);
}

function Cards({characters, onClose, onSearch, closeCards,}) {
   return (
      <div>
         <div className={style.boton}>
         <button className={style.barra1} onClick={() => onSearch(random())}>Random</button>
         <button className={style.barra1} onClick={closeCards}> Clear All</button>
            </div>
      <br />
      <SearchBar onSearch= {onSearch}/>
      <div className={style.Cards}>
      {
         characters.length === 0 ? (
            <p className={style.loader}>To start please enter a number between 1 and 826 or click on the button random</p>
         ) : (
            characters.map(({id, name, species, gender, image}) => (
               <Card
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image} 
                  id={id}           
                  onClose={() => onClose (id)}
               />
            ))
         )
      }
   </div>
   </div>
   )
}

export default Cards;
