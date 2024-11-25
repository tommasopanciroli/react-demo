// questo file è il nostro primo componente React creato da noi

const MainComponent = (props) => {
    // ritorniamo del JSX 
    return (
        <section className={props.color}>
            <h3>Componente React creato da me</h3>
            
            <p>Diamo il benvenuto a {props.student} </p>
        </section>
    )
}

export default MainComponent
// esporto questo componente per renderlo disponibile agli altri file JS/JSX

// PROPS 
// le props sono fondamentali per dinamicizzarre i componenti 
// ovvero renderli compatibili con dei "parametri"
// PROPS è un oggetti che conterrà le prop che sto passando a quel componente
