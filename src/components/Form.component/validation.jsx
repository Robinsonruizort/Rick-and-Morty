const validation = (userData) => {
    const errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "El email no es válido";
    }
    if(!userData.username){
        errors.username = "Este campo no puede estar vacío";
    }
    if(userData.username.lenght > 36){
        errors.username = "El email no puede superar los 35 carácteres";
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un número";
    }
    if(userData.password.lenght < 6 || userData.password.lenght > 10) {
        errors.password = "La contraseña debe contener entre 6 y 10 carácteres";
    }

return errors;

}

export default validation;