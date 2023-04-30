import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import style from "./favorites.module.css";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div className={style.filter}>
        <div>
          <span className={style.parag}>Filter by</span>
          <select className={style.opt} onChange={handleFilter}>
            {/* <option value="filter" disabled="disabled"> </option> */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
            <option value="Genderless">Genderless</option>
          </select>
        </div>
        <div>
          <span className={style.parag}>Order by</span>
          <select className={style.opt} onChange={handleOrder}>
            {/* <option value="order" disabled="disabled"> </option> */}
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>
      </div>
      <div className={style.favo}>
        {myFavorites.map((character) => {
          return (
            <div key={character.id} className={style.Card}>
              <Link to={`/detail/${character.id}`}>
                <h2 className={style.name}>{character.name}</h2>
              </Link>
              <h2 className={style.details}>{character.species}</h2>
              <h2 className={style.details}>{character.gender}</h2>
              <img
                className={style.img}
                src={character.image}
                alt="Personaje"
              />
              <div className={style.end}>
                <h2 className={style.details}> id: {character.id}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
