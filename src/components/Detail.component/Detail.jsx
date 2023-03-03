import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.css"

const Detail = () => {
    const { detailId } = useParams ();
    // console.log(useParams());

    const [character, setCharacter] = useState ({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
  
      }, [detailId]);

    return (
      <div>
        <div className={style.Card}>
            <p className={style.details}>{character?.status}</p>
            <h1 className={style.name}>{character?.name}</h1>
            <p className={style.details}>{character?.species}</p>
            <p className={style.details}>{character?.gender}</p>
            <p className={style.details}>{character?.origin?.name}</p>
            <img className={style.img} src={character?.image} alt={character.name} />
            <br />
        </div>
            <div>
            <button>
            <Link to="/home">Homepage</Link> 
            </button>
            </div>

      </div>

    )
}

export default Detail;