// i componenti a classe fanno parte della "storia" di React
// i componenti a classe sono un pò più complessi dei componenti a funziona ma possono ospitare molta logica 

import { Component } from "react";
// questo Component è il "nonno" di tutti i componenti a classe, viene definito in React ogni volta che creiamo un nostro componente a classe

class ClassComponent extends Component {
    // dentro un componente a classe è obbligatorio un metodo che si chiama "render"
        render() {
            return (
                <section>
                    <h2>Sono un componente a classe!</h2>
                    <button className="btn">{this.props.label}</button>
                </section>
            )
        }
}

export default ClassComponent