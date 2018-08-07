import React, {Component} from 'react'

export default class CompView extends Component{

    constructor(props){
        super(props)
        this.state = {
            show: false,
            pokeid = null
        }
        
    }

    changeView(){
        console.log(this.state.show)
        this.setState({show:!this.state.show})
    }

    render(){
        return(
            
        this.state.show?<div className="overlay">
            <div href="#" className="cross" onClick={this.changeView.bind(this)}>x</div>
            </div>:null
            
        )
    }
}