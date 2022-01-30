import React from 'react'
import { render } from 'react-dom'
import Question from "./Components/Question.js"
import Explaination from "./Components/Explaination.js"
import Choices from "./Components/Choices.js"
import json_oc from "../jsons/oc.json"
const $ = require("jquery");





export default class App extends React.Component{
    constructor(props){
        super(props)
        let {type,  json} = props
        this.timeout = ""

        // console.log(json_oc)
        this.quizPartie1 = json_oc[0]
        this.infos = this.quizPartie1[0].theme ? this.quizPartie1.shift() : {"theme": "-","skill": "-","level": "-"}
        console.log(this.infos);
        
        this.state={
            json: json_oc[0],
            quizFrame: "",
            // quizFrame: <Question key={"ask_"+this.state.current} {...quizPartie1[this.state.current]} />,
            current: -1,
            explain: <></>,
            score: 0,
            new_in_3s: true
        }

        // const blockComponents = {
        //     consigne:{},
        //     question:{},
        //     choices:{},
        //     responses:{},
        //     indice:{},
        //     explanation:{},
        //     validation:{},
        // }

        
        this.quizPartie1 = this.quizPartie1.map((quizFrame,index)=>{
            return [
                <Question key={"ask_"+index} {...quizFrame} />,
                <Choices key={"choice_"+index} {...{index, quizFrame, getValidation: this.getValidation}} />,
                // blockComponents.question = this.getQuestion(e, i),
                // blockComponents.choices = this.getChoices(e, i),
            ]
        })

    }
    componentDidMount(){
        this.changeQuestion(">")
    }

    /*
    getQuestion = (quizFrame, index) => {
        return (
            <Question key={"ask_"+index} {...quizFrame} />
        )
    }

    getChoices = (quizFrame, index) => {
        console.log(quizFrame);
        console.log(quizFrame.responses);
        return (
            <Choices {...{index, quizFrame, getValidation: this.getValidation}} />
        )
    }
    
    getExplanation = (explain) => {
        return(
            <Explaination explain={explain} />
        )
    }
    */

    getValidation = (e) => {
        e.preventDefault()
        alert('Il faut déterminer les réponses juste et les rendre visibles\n\nIl faut aussi que sous le score apparaissent "correct" ou "incorrect", et que le score clignote une fois dans la couleur verte ou rouge ')
        document.getElementById('quiz_explain').style.display = "block"
        let json = this.state.json[this.state.current]
        console.log(json);
        if(json.responses[e.target.getAttribute('response')]){
            this.state.score++
            $("#quiz_explain").addClass('tadashii')
        }else $("#quiz_explain").addClass('ayamari')
        // alert(unescape(json.explain))
        // this.state.explain = this.getExplanation(json.explain)
        // console.log(this.state)
        this.timeout = setTimeout(()=>{this.changeQuestion(">")}, 3000)
        this.setState({
            // explain: this.getExplanation(json.explain),
            explain: <Explaination explain={json.explain} changeQuestion={this.changeQuestion} />,
            // current: ++this.state.current
        })
        console.log(this.state);
        // setTimeout(()=>{this.changeQuestion(">")}, 3000)
    }
    changeQuestion = (e) => {
        clearTimeout(this.timeout)
        document.getElementById('quiz_explain').style.display = "none"
        $(quiz_explain).removeClass(['btn_close', 'btn_pause'])
        if(typeof e == "string") e == ">" ? this.state.current++ : this.state.current--
        else if(e.target) e.target.innerHTML == "&gt;" ? this.state.current++ : this.state.current--
        // console.log(this.state);
        // console.log(this.state.current);
        // console.log(this.quizPartie1[this.state.current]);
        this.setState({quizFrame: this.quizPartie1[this.state.current]})
        // this.setState({quizFrame: <div>okok</div>})
    }

    getResponse = (quizFrame, index) => {

    }

    getResponse_ = (quizFrame, index) => {

    }

    getIndices = (quizFrame, index) => {

    }

    getConsigne = () => {
        
    }

    render(){
        return (
            <>
                <header className="headerbar navbar-light bg-primary">
                    <a className="__brand navbar-brand" target="_blank" href="https://github.com/webdev-archist/PROJECTS___BootStarter" title={"Quize difficulty leve: "+this.infos.level}>
                        QUIZ:&nbsp;
                        <span id="quiz_level">{ this.infos.level }</span>
                    </a>
                    <a className="__titles navbar-brand" target="_blank" href="#" title={this.infos.skill}>
                        <u id="quiz_theme" title={ this.infos.skill }>{ this.infos.theme }:</u>
                        <em id="quiz_skill"> { this.infos.skill }</em>
                    </a>
                    <menu className="__menu navbar-menu" id="navbarID">
                        <a id="quiz_prev" className="prev" href="#" title="Previous" onClick={this.changeQuestion}>&lt;</a>
                        <a id="quiz_next" className="next" href="#" title="Next" onClick={this.changeQuestion}>&gt;</a>
                    </menu>
                </header>
                <main className="CAT00 quiz container">
                    <section className="__score" id="quiz_score">{ this.state.score } <span>/{ this.quizPartie1.length }</span> </section>
                    { this.state.quizFrame }
                    {/* <button id="quiz_next" >Next?</button> */}
                    <section className="__explain" id="quiz_explain">{ this.state.explain }</section>
                </main>

            </>
        )
    }
}