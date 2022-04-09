import React from "react"
import Card from "./Card"
import { connect } from "react-redux"



function Sorteio(props) {
    const { num } = props
    const random = parseInt(Math.random() * num)
    const titulo = "Sorteio de Números de 0 até " + num

    return (
        <Card title={`${titulo}`} purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <span>{random}</span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Sorteio)