import './Kitas.css'


const Hero =({title,subtitle, color}) => {
    return(
        <section className={`hero ${color}`}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            

        </section>
    )
}

export default Hero


  