import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from './Address.js'

const REVIEWS = [
  "I love this place!",
  "Best experience ever!",
  "YES! Will come back!"
]

class BeautyPlace extends Component {
  render() {
    const reviews = this.props.reviews.map(
      review => React.createElement('li', {}, review))

    return (
      <div className="beauty-place">
        <h2>{this.props.name}</h2>
        <small>
          <Address street="123 main lane" city="San Francisco" /> 
        </small>
        <h4>Rating: {this.props.rating}</h4>
        {reviews}
      </div>
    );
  }
}

BeautyPlace.defaultProps = {
  name: 'Polly Polishes',
  rating: '*',
  reviews: REVIEWS
};

BeautyPlace.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.integer
};

export default BeautyPlace;