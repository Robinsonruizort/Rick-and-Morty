import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect} from "react";
import { addFavorite, delFavorite } from "../../redux/actions";
import style from "./Card.module.css";


function Card({name, gender, onClose, species, image, id}) {

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(delFavorite(id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({name, gender, onClose, species, image, id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.Card}>
         {
         isFav ? (
            <button className={style.fav} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={style.fav} onClick={handleFavorite}>🤍</button>
            )
         }
         <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
         </Link>
         <h2 className={style.details}>{species}</h2>
         <h2 className={style.details}>{gender}</h2>
         <img className={style.img} src={image} alt= "Personaje" />
         <div className={style.end}>
         <h2 className={style.details}> id: {id}</h2>
         <button className={style.button} onClick={onClose}>X</button>
         </div>
      </div>
   );
}

export default Card;