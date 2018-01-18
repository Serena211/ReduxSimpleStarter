import React, { Component } from 'react';
import Headers from './header'
export default class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        {this.props.children}
      </div>
    );
  }
}
