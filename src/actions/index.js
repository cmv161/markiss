const itemLoaded = (newItem) => {
  return {
    type: 'ITEM_LOADED',
    payload: newItem
  };
};
export default itemLoaded

