import React, { Component } from 'react';
import City from './city';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render () {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return < City city={city} key={city.address} />;
        })}
      </div>
    )
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      { setCities: setCities },
      dispatch
    );
  }

  const mapStateToProps = (state) => {
    return {
      cities: state.cities
    };
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
