import React, { Component } from 'react';
import BeautyPlace from './BeautyPlace';

class BeautyBrowser extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const beautyPlaces = this.props.beautyPlaces.map(
      (beautyPlace, index) => (<BeautyPlace beautyPlace={beautyPlace} />)
    );

    return (
      <div className="places">
        {beautyPlaces}
      </div>
    );
  }
}

export default BeautyBrowser;
