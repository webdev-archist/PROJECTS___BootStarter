import React from 'react'
import { render } from 'react-dom'
import Timer from "./Timer.js"
import ReactHtmlParser from 'react-html-parser';
const $ = require("jquery");

export default class Explanation extends React.Component {
    
    constructor(props){
        super(props)
    }
    // getExplaination(){
    //     this.props.explaination
    // }
    getCloseButton = () => {
        {/* <span className="pause">||</span> */}
        return (
            <button id="quiz_close_explain"
                onClick={(e) => { 
                    e.target.style.display="none" 
                    $(e.target).closest('section').hide()
                }}
            >X</button>
        )
    }
    getPauseButton = () => {
        {/* <span className="pause">||</span> */}
        // alert(this.props) ; 
        return (
            <button id="quiz_pause"
                onClick={(e) => { 
                    clearTimeout(this.timeout)
                    $(e.target).closest('section').addClass('btn_pause')
                }}
            >||</button>
        )
    }

    render(){
        return (
            <>
                {this.getCloseButton()}
                {this.getPauseButton()}
                {/* <Timer type={"reverse"} duration={3} /> */}
                { ReactHtmlParser(unescape(this.props.explain)) }
            </>
        )
    }
}