import {useState} from 'react'
function About (){
    const [mostrarMas, setMostrarMas]= useState(false)
    return (
        <section>
            <h2>Sobre mi</h2>
<p> Soy estudiante de la Tecnicatura Universitaria en Programacion.
    Me interesa el desarrollo de sofware y seguir aprendiendo nuevas tecnologias.
    </p>
    {mostrarMas && (
        <p>Actualmnte estoy aprendiendo React y desarrolando proyectos para mejorar mis habilidades en programacion.</p>
    )}
    <button onClick={()=> setMostrarMas(!mostrarMas)}> 
        {mostrarMas ? 'Mostrar menos' : 'Mostrar más'} 
        </button>
        </section>
    )
}
export default About