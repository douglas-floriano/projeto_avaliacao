import React from 'react'

import Card from "./Card"
import { connect } from "react-redux"



function Propriedades(props) {
    const { num } = props
    return (
        <Card title={props.titulo} {...props}>
            <div>
                <span> {props.aluno} sua nota é: { num } </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Propriedades)