import _ from 'lodash';
import {ITEMS_BY_ID} from './itemList';

export function getItemsForTamas(tamas) {
  const itemIds = getItemsForTamasHelper(tamas, []);
  return _.sortBy(_.map(itemIds, id => ITEMS_BY_ID[id]), 'displayName');
}

function getItemsForTamasHelper(tamas, items) {
  if (tamas.length === 0) {
    return items;
  }

  if (tamas.length === 1) {
    items.push(tamas[0].favoriteItems[0]);
    return items;
  }

  // Satisfy "picky" tamas first (the ones that only have 1 favorite item)
  const pickyTamas = _.remove(tamas, tama => tama.favoriteItems.length === 1);

  if (pickyTamas.length > 0) {
    _.chain(pickyTamas)
    .map('favoriteItems')
    .flatten()
    .uniq()
    .value()
    .forEach(item => items.push(item));

    // Remove tamas that are satisfied by the picky tama choices
    _.remove(tamas, tama => hasCommonItem(tama.favoriteItems, items));
  }

  const mostFreqFavoriteItem = _
    .chain(tamas)
    .map('favoriteItems')
    .flatten()
    .countBy()
    .toPairs()
    .maxBy(_.last)
    .head()
    .value();

  items.push(mostFreqFavoriteItem);

  return getItemsForTamasHelper(
    tamas.filter(tama => !hasCommonItem(tama.favoriteItems, items)),
    items
  );
}

function hasCommonItem(arr1, arr2) {
  return arr1.some(item => _.includes(arr2, item));
}
