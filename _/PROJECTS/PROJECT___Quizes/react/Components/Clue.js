import React from 'react'
import { render } from 'react-dom'

export default class Clue extends React.Component {
    
    constructor(props){
        super(props)
    }

    addClue = () => {
        return <p>{ this.props.clue }</p>
    }

    render(){
        // return <p>{ this.props.clue }</p>
        return  (
            <>
            <button title="Voir un indice ?">
                <i className="clue"></i>
            </button>
            { this.addClue() }
            </>
        )
    }
}