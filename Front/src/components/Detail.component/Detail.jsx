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
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacter(data);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
  
      }, [detailId]);

    return (
      <div className={style.general}>
        <div className={style.Card}>
          <div className={style.information}>
            <h1 className={style.name}>{character?.name}</h1>
            <p className={style.details}> Status: {character?.status}</p>
            <p className={style.details}> Species: {character?.species}</p>
            <p className={style.details}> Gender: {character?.gender}</p>
            <p className={style.details}> Origin: {character?.origin}</p>
            <p className={style.details}> Location: {character?.location}</p>
          </div>
            <img className={style.img} src={character?.image} alt={character.name} />
            <br />
        </div>
            <div>
            <button className={style.homepage}>
            <Link to="/home" className={style.link}>Homepage</Link> 
            </button>
            </div>

      </div>

    )
}

export default Detail;