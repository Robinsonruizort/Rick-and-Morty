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
            <input className={style.input} type="text" name="username" value={userData.username} onChange={handleInputChange} />
            <br />
           {errors.username && <p className={style.errors} >{errors.username}</p>}
           <br />
            <label className={style.options} htmlFor="password" placeholder="Ingrese su contraseña">Password: </label>
            <br />
            <input className={style.input} type="password" name="password" value={userData.password} onChange={handleInputChange}/>
            <br />
            {errors.password && <p className={style.errors}>{errors.password}</p>}
            <button className={style.options}>LOGIN</button>
            <br />
            <span title= " Username: email@prueba.com  ////  Password: 12345a ">?</span>
        </form>
    )
}


export default Form;