// ShoppingList.js
import React from 'react';
import commonColumnsStyles from '../../../common/styles/Columns.module.scss';

function ShoppingList({ shoppingList, onRemove }) {
  const handleRemoveOne = (productName) => {
    onRemove(productName, true); // Dodano drugi parametr, oznaczający usunięcie jednego elementu
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shopping List</p>
        <ul>
          {shoppingList && Array.isArray(shoppingList) && shoppingList.length > 0 && shoppingList.map((product, index) => (
            <li key={index} onContextMenu={(e) => { e.preventDefault(); handleRemoveOne(product.nazwa); }}>
              {product.nazwa}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default ShoppingList;
