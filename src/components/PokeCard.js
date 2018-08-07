import React, {Component} from 'react'
import {Row, Col, Thumbnail} from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {SHOW_DETAIL} from '../actions/ActionType'

class PokeCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            fullview:false,
            fetched: false,
            loading: false,
            details: {height: 'loading..', weight: 'loading..', base_experience:'loading..', type: 'loading..'}
        }
    }

    componentWillMount(){

        this.setState({
            loading: true,
        })

        const url = this.props.url
        axios.get(url)
        .then(response=>{
            const {weight, height, base_experience} = response.data
            const type = response.data.types[0].type.name
            
            this.setState({
                fetched: true,
                loading: false,
                details: {type, weight, height, base_experience}
            })
        })
        .catch(error=>console.log("Error in fetching"))
    }

    render(){
        const {id, pokemon} = this.props
        const {weight, height, base_experience, type} = this.state.details
        return(
            <Thumbnail src={require(`../assets/sprites/${id}.png`)} className="thumb" onClick={()=>this.props.dispatch({type:SHOW_DETAIL, payload:id})}>
                <center><h4>{pokemon["name"].capitalize()}</h4></center>
                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">Type</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{type.capitalize()}</Col>
                </Row>
                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">Height</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{height}</Col>
                </Row>
                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">Weight</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{weight}</Col>
                </Row>
                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">XP</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{base_experience}</Col>
                </Row>

            </Thumbnail>
        )
    }
}

function mapStateToProps(state){
    return {
      count: state.Abc.value,
    };
  }
export default connect(mapStateToProps)(PokeCard);

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png
