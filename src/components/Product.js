import React from 'react';
import '../components/product.css';

export default function Product({
  item,
  onAdd,
  onRemove,
  count,
  productId,
  cartItems,
  searchResults
  

}) {
  // console.log('The product Id: ', productId);

  return (
    <div className="display_item">
      <div className="product-items">
        <div className="product">
          <h5> {item ? item.product_name : 'product undefined'}</h5>
        </div>
        <div>
          <div className="button">
          <button onClick={() => onRemove(item)} className="minus">
              -
            </button> 

            {cartItems.map((cartItem) =>
              cartItem.id === item.id ? (
                <span key={cartItem.id} className="number">
                  {cartItem.quantity}
                </span>
              ) : (
                ''
              )
            )}
             <button onClick={() => onAdd(item)} className="plus">
              +
            </button>

          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
}
