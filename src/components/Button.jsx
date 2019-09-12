import React, { Component } from 'react';

class Button extends Component {
    render() { 
        return ( <a href={this.props.link} className="button">{this.props.text}</a> );
    }
}
 
export default Button;