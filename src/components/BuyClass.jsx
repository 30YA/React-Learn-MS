import { Component } from 'react';

export default class BuyClass extends Component {
    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    showAlert(name) {
        alert(name)
    }
    handleClick() {
        const name = this.props.name
        setTimeout(() => this.showAlert(name), 2000)
    }
    render() {
        return (
            <div>
                <span className='badge' onClick={this.handleClick}>Buy</span>
                <p>class</p>
            </div>
        )
    }
}