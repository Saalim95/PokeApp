import React, {Component} from 'react'
import {Row, Col, Thumbnail, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {CATCH_POKE} from '../actions/ActionType'

class PokeInflated extends Component{

    constructor(props){
        super(props)
        this.state = {
            height: '..',
            weight: '..',
            xp: '..',
            type:'..',
            name:null,
            caught: false
            
        }
    }

    componentWillMount(){
        const pokeid = this.props.pkid
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeid}/`
        axios.get(url)
        .then(response=>{
            const type = response.data.types[0].type.name.capitalize()
            let name = response.data.forms[0].name
            name = name.capitalize()
            const {height, weight, base_experience} = response.data
            this.setState({height: height, weight: weight, xp:base_experience, type:type, name:name})
        })
    }

    render(){
        return(
            <Thumbnail src={require(`../assets/sprites/${this.props.pkid}.png`)} className="detailedView">
                <center><h4>{this.state.name}</h4></center>
                
                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">XP</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{this.state.xp}</Col>
                </Row>

                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">Type</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{this.state.type}</Col>
                </Row>
                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">Height</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{this.state.height}</Col>
                </Row>
                <Row>
                    <Col md={6} sm={6} xs={6} className="cardCaption">Weight</Col>
                    <Col md={6} sm={6} xs={6} style={{textAlign: 'right'}}>{this.state.weight}</Col>
                </Row>

                <Row>
                    <Col mdOffset={5}>
                    <Button 
                        bsStyle="primary" 
                        bsSize={"large"} 
                        onClick={()=>{
                            this.props.dispatch({type:CATCH_POKE, payload:this.props.pkid})
                            this.setState({caught:true})
                            
                        }
                            }>
                        {this.props.catchlist.includes(this.props.pkid)?'CAUGHT':'CATCH IT!'}
                        </Button>
                    </Col>
                </Row>

            </Thumbnail>
        )
    }

}

function mapStateToProps(state){
    return {
      count: state.Abc.value,
      detail: state.Abc.detail,
      pkid: state.Abc.pkid,
      catchlist: state.Abc.catchlist
    };
  }

export default connect(mapStateToProps)(PokeInflated)