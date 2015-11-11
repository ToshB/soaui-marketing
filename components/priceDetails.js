import {createFactory, createClass, DOM} from 'react';
const {p, div} = DOM;

export const priceDetails = createFactory(createClass({
  render() {
    return div({className: 'section'},
      p({}, `Price: ${this.props.price}`)
    );
  }
}));