import React from "react"
import Card from "./Card"
import "./Numero.css"

import { connect } from "react-redux"
import { alterarNumero } from "../store/action/numeros"

function Numero(props) {
    const { num } = props
    return (
        <Card title="Escolha um número" blue>
            <div className="Numero">
                <span>
                    <span>Número: </span>
                    <input type="number" min="0" value={num}
                        onChange={e => props.alterarNum(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        alterarNum(novoNumero) {
            const action = alterarNumero(novoNumero)
            dispatch(action)
        }

    }
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numero)