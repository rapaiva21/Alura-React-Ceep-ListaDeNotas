import React, { Component } from "react";
import CardNota from "./CardNota";


class ListaDeNotas extends Component {

    render(){
        return (
            <ul>
                <li>
                    {console.log("tesde de JS em React")}
                    <div>trabalho</div>
                    <CardNota/>                    
                </li>
                <li> 
                    <div>trabalho</div>
                    <CardNota/>                     
                </li>
                <li>
                    <div>estudos</div>
                    <CardNota/>                     
                </li>
            </ul>

        );
    }
}


export default ListaDeNotas;