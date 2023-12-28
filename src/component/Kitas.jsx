import './Kitas.css'


const Hero =({title,subtitle1, subtitle, color}) => {
    return(
        <section className={`hero ${color}`}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle1}</p>

        </section>
    )
}

export default Hero