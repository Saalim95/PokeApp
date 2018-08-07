import React, {Component} from 'react'
import {connect} from 'react-redux'
import PokeCard from './PokeCard'
import {HIDE_BACKPACK} from '../actions/ActionType'
import {Grid, Row, Col} from 'react-bootstrap'
import axios from 'axios'


class BackPack extends Component{

    constructor(props){
        super(props)
        this.state={
            catchlist: this.props.catchlist
        }
    }


    render(){
        const {catchlist} = this.state
        console.log(catchlist)
        return(
        <div>
            <div className="overlay">
            <div href="#" className="cross" onClick={()=>this.props.dispatch({type:HIDE_BACKPACK})}>x</div>
            <h1>BackPack</h1>
            </div>
            <div className="container">
            <Grid>
            <Row>
                {catchlist.map((pokemon, index)=><Col md={2} sm={4} xs={6}>
                <PokeCard key={index+1} pokemon={pokemon} id={index+1} url={pokemon["url"]}/>
                </Col>)}
            </Row>
            </Grid>
            </div>
        </div>
        )
    }

}

function mapStateToProps(state){
    return {
      backpack: state.Abc.backpack,
      catchlist: state.Abc.catchlist,
      pokelist: state.Abc.pokelist,
      catchlist:state.Abc.catchlist
    };
  }


  export default connect(mapStateToProps)(BackPack)