import React, {Component} from 'react'
import {connect} from 'react-redux'
import PokeInflatedCard from './PokeInflatedCard'
import {HIDE_DETAIL} from '../actions/ActionType'

class DetailView extends Component{

    changeView(){
        this.setState({show:false})
    }

    render(){
        return(
            
        this.props.detail?<div className="overlay">
            <PokeInflatedCard/>
            <div href="#" className="cross" onClick={()=>this.props.dispatch({type:HIDE_DETAIL})}>x</div>
            </div>:null
            
        )
    }
}


function mapStateToProps(state){
    return {
      count: state.Abc.value,
      detail: state.Abc.detail,
    };
  }
export default connect(mapStateToProps)(DetailView);