// ProductsList.js
import React, { useState } from 'react';
import commonColumnsStyles from '../../../common/styles/Columns.module.scss';
import produkty from '../../../common/consts/produkty';
import ShoppingList from '../ShopingList/ShopingList';

function ProductsList() {
  const [availableProducts, setAvailableProducts] = useState(produkty);
  const [shoppingList, setShoppingList] = useState([]);

  const handleProductClick = (productName) => {
    const selectedProduct = availableProducts.find((product) => product.nazwa === productName);

    if (selectedProduct) {
      setShoppingList((prevList) => [...prevList, selectedProduct]);
    }
  };

  const handleRemoveFromShoppingList = (productName, removeOne = false) => {
    if (removeOne) {
      const productIndex = shoppingList.findIndex((product) => product.nazwa === productName);
      if (productIndex !== -1) {
        const newShoppingList = [...shoppingList];
        newShoppingList.splice(productIndex, 1);
        setShoppingList(newShoppingList);
      }
    } else {
      setShoppingList((prevList) => prevList.filter((product) => product.nazwa !== productName));
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul>
          {availableProducts.map((product, index) => (
            <li key={index} onClick={() => handleProductClick(product.nazwa)}>
              {product.nazwa}
            </li>
          ))}
        </ul>
      </header>
      <ShoppingList shoppingList={shoppingList} onRemove={handleRemoveFromShoppingList} />
    </div>
  );
}

export default ProductsList;

