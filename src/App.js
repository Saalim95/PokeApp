import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import PokeCard from './components/PokeCard'
import DetailView from './components/DetailView';
import axios from 'axios'
import Filter from './components/Filter'
import BackPack from './components/BackPack';
import {ADD_POKELIST, SHOW_BACKPACK} from './actions/ActionType'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokelist:[],
      fetched: true,
      loading: false,
    }
  }

  componentWillMount(){
    	
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  } 
    this.setState({
      loading: true
    })

    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(response=>{
        response = response.data //json
        let temp = {}
        response.results.forEach(element => {
          temp[element.url] = element.name
        });
        this.props.dispatch({type:ADD_POKELIST, payload:temp})
        this.setState({
          pokelist: response.results,
          loading: false,
          fetched: true,
          backpack: true,
        })
      })
      .catch(e=>console.log(e))

  
      }

  render() {

    const {fetched, pokelist} = this.state
    const element = 
    <div>
      {this.props.backpack?<BackPack/>:null}
      <DetailView/>
      <Button onClick={()=>this.props.dispatch({type:SHOW_BACKPACK})}>SHOW_BACKPACK</Button>
      <div className="container">
        <Grid>
          <Row>
            {pokelist.map((pokemon, index)=><Col md={2} sm={4} xs={6}>
              <PokeCard key={index+1} pokemon={pokemon} id={index+1} url={pokemon["url"]}/>
            </Col>)}
          </Row>
        </Grid>
      </div>
    </div>
    return (
      <div>{fetched?element:'Fetching......'}</div>
    );
  }
}

function mapStateToProps(state){
  return {
    backpack: state.Abc.backpack,
    catchlist: state.Abc.catchlist
  };
}

export default connect(mapStateToProps)(App)
