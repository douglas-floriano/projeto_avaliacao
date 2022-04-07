import React from "react"
import Card from "./Card"
import { connect } from "react-redux"
function Sorteio(props){
    const {num} = props

    return (
        <Card title="Está chegando..." green>
            <div>
                <span>
                    <span>Estarei de recesso em {num} dias</span>
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