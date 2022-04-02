import "./Intervalo.css"
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"
import { alterarNumeroMinimo } from "../store/actions/numeros"
import { alterarNumeroMaximo } from "../store/actions/numeros"

function Intervalo(props) {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <span>Mínimo:</span>
                    {/* <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} /> */}
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <span>Máximo:</span>
                    {/* <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} /> */}
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)