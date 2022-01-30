import React from 'react'
import { render } from 'react-dom'
import Clue from "./Clue.js"

export default class Question extends React.Component {
    constructor(props){
        super(props)
        this.explain_ = props.explain_
        this.question = props.question
    }
    render(){
        return(
            <h2 className="__title">
                {this.props.question} 
                <Clue clue={this.clue||""} />
            </h2>
            // <p dangerouslySetInnerHTML={}></p>
        )
    }
}