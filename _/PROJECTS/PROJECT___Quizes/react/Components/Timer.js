import React from 'react'
import { render } from 'react-dom'

export default class Timer extends React.Component {
    
    constructor(props = {type: "standard", duration: 1}) {
        super(props)
        alert('ok')
        this.state = {
            incrementer: 0,
            // time: props.type=="standard" ? props.from
            interval: this.intervals()
        }
        alert(this.state)
        this.timer = this.timer.bind(this)
    }

    intervals(){
        return setInterval(
            this.timer()
            , 100
        )
    }
    timer(){
        console.log(this)
        console.log(this.state)
        if (this.state.incrementer < this.props.duration)
            this.state.incrementer = this.state.incrementer + 0.1
        else clearInterval(this.state.interval)
    }

    render() {
        return (
            <span className="timer">
                {this.props.type == "standard" || !this.props.type ? this.props.incrementer
                : this.props.type == "reverse" ? this.props.duration - this.props.incrementer
                : `Type "${this.props.type}" inconnue`
                }
            </span>
        )
    }
}