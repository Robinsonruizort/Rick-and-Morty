import style from "./About.module.css"

const About = () => {
    return(
        <div className={style.about}>
            <h1>Aplicación de Rick and Morty</h1>
            <h3>Esta aplicación esta hecha aplicando los conocimientos adquiridos durante el Bootcamp de Henry en herramientas / Lenguajes como HTML, CSS, JavaScrip y React, en la aplicación podrás acceder informacion de los personajes de la serie, asi mismo, como crear tu espacio de favoritos y adentrarse en mayores detalles con solo un click, tambien cuenta con un generador de personajes aleatorios que te permitira divertirte mientras descubres quien hace parte de este mundo.</h3>
        </div>
    )
}

export default About;