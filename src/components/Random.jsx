import {PureComponent, Component} from 'react';

class Random extends PureComponent {
    state = {  } 
    render() { 
        return (
            <div>{Math.random()}</div>
        );
    }
}
 
export default Random;