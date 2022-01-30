import React from 'react'
import { render } from 'react-dom'

export default class Choices extends React.Component {
    
    constructor(props){
        super(props)
        alert('Il faut permettre de valider ses réponse manuellement (validation automatique par défaut)')
    }


    render(){
        // return <p>{ this.props.clue }</p>
        let {index, quizFrame} = this.props
        let checkbox = quizFrame.responses.filter(e=>e==1).length > 1 ? true : false
        return  (
            <form   className={"__choices "+checkbox?"checkbox":""}
                    key={"_"+index} 
                    onSubmit={this.props.getValidation} 
                    onChange={!checkbox ? this.props.getValidation : undefined} 
            >
                {quizFrame.choices.map((e, i) => {
                    return (
                        <fieldset key={index}>
                            <label htmlFor={"question" + index + "_" + i}>{e}</label>
                            <input id={"question" + index + "_" + i} name={"question" + index} type={checkbox ? "checkbox" : "radio"} response={i} />
                        </fieldset>
                    )
                })}
                {checkbox && <input type="submit" />}
            </form>
        )
    }
}