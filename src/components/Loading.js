import React, { Component } from 'react'
import loadingarrow  from '../images/gif/loadingarrow.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
            <h4>rooms data loading...</h4>
                <img src={loadingarrow} alt="" />
            </div>
        )
    }
}
