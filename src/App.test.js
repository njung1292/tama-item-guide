import React from 'react';
import TAMA_LIST from './tamaList';
import _ from 'lodash';
import {getItemsForTamas} from './getItemsForTamas';

// import { render } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

_.times(10, () => {
  const testedNumbers = [];
  test('test that all tamas in original list are satisfied', () => {
    let numTamas = _.random(0, TAMA_LIST.length);
    while(testedNumbers.indexOf(numTamas) > -1) {
      numTamas = _.random(0, TAMA_LIST.length);
    }

    const tamas = _.sampleSize(numTamas, TAMA_LIST);
    const items = getItemsForTamas(tamas);
    const itemIds = _.map(items, 'id');

    _.forEach(tamas, tama => {
      const favoriteItems = tama.favoriteItems;
      expect(_.isEmpty(_.intersection(favoriteItems, itemIds))).toBeFalse();
    });

    testedNumbers.push(numTamas);
  });
});
