import style from "./validation.module.css"

const validation = (userData) => {
    const errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = <span className={style.error}>El email no es válido</span>;
    }
    if(!userData.username){
        errors.username = <span className={style.error}>Este campo no puede estar vacío</span>;
    }
    
    if(userData.username.length > 36){
        errors.username = <span className={style.error}>El email no puede superar los 35 carácteres</span>;
    }
    if(!userData.password.match(/\d/)){
        errors.password = <span className={style.error}>La contraseña debe contener al menos un número</span>;

    }
    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = <span className={style.error}>La contraseña debe contener entre 6 y 10 carácteres</span>;
    }

return errors;

}

export default validation;