import React, {Component} from 'react'
import {SplitButton, MenuItem} from 'react-bootstrap'


export default class Filter extends Component{
    render(){
        return(
            <SplitButton
            className="filter"
            bsStyle={'primary'}
            title={"Type"}
            >
            <MenuItem eventKey="1" active>All</MenuItem>
            <MenuItem eventKey="1">Fire</MenuItem>
            <MenuItem eventKey="2">Bug</MenuItem>
            <MenuItem eventKey="3">Flying</MenuItem>
            </SplitButton>
        )
    }
}