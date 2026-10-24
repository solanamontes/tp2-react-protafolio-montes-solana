import { usePortfolioStore } from "../store/usePortfolioStore"

function Skills (){
    const habilidades = usePortfolioStore(
        (state)=>state.habilidades
    )
    
    return (
        <section>
            <h2>Mis Habilidades</h2>
            <ul>
                {habilidades.map(habilidad => (
                    <li key={habilidad}>{habilidad}</li>
                ))}
            </ul>
        </section>
    )
}
export default Skills