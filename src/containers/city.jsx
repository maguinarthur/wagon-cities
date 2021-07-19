import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <p className="city">{this.props.city.name}</p>
    )
  }
}

export default City;
