import { useState } from "react";
import validation from "./validation";
import style from "./form.module.css"

const Form = ({login}) => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    
    const [errors, setErrors] = useState({
        username: '', password: '' 
    });

    const handleInputChange = (e) => {
        setUserData ({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }


    return (
        <form className={style.login} onSubmit={handleSubmit}>
            <label className={style.options} htmlFor="username" placeholder="Ingrese su Email">Username: </label>
            <br />
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
           {errors.username && <p style ={{color: "white"}}>{errors.username}</p>}
            <br />
            <br />
            <br />
            <label className={style.options} htmlFor="password" placeholder="Ingrese su contraseña">Password: </label>
            <br />
            <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p style={{color: "white"}}>{errors.password}</p>}
            <br />
            <br />
            <button className={style.options}>LOGIN</button>
            <br />
            <span title= " email: email@prueba.com contraseña: 12345a ">?</span>
        </form>
    )
}


export default Form;