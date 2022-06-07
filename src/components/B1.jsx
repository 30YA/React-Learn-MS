import React, { Component } from 'react'
import color from './randomColor'


export default class B1 extends Component {

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.number !== this.props.number) {
            return true;
        }

        return false;
    }
    render() {
        return (
            <div style={{ backgroundColor: color() }}>
                B1
                {this.props.children}
            </div>
        )
    }
}
