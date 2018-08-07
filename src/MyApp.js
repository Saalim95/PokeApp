import React, { Component } from 'react';
import { connect } from 'react-redux';

//TODO https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png

class MyApp extends Component {

  render() {
    
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={()=>this.props.dispatch({type: 'ADD_COUNTER',payload: 1})}>+</button>
        <button onClick={()=>this.props.dispatch({type: 'REMOVE_COUNTER',payload: 1})}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      count: state.Abc.value, //state.<NAME_OF_THE_REDUCER_IN_COMBINEREDUCERFUNCTION>
    };
  }
export default connect(mapStateToProps)(MyApp);
