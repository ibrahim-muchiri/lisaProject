import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './../App.css';
import Product from './Product';

export default function ProductItems({ items, onAdd, onRemove, cartItems, setSearchResults, searchResults}) {    
  console.log('The items are here: ', items);
  console.log(ProductItems);

  const totalAmount = cartItems.reduce(
    (acc, curItem) =>
      parseInt(acc) + curItem.quantity * parseInt(curItem.selling_price),
    0
  );
  console.log('The total amount is : ', totalAmount);

  // //Search functionality
  // const handleSearchTerm = (e) => {
  //   if(!e.target.value) return setSearchResults(items);    

  //   const resultArray = items.filter(item => item.product_name.includes(e.target.value));
  //   setSearchResults(resultArray);    
  //   console.log("data", resultArray);

  // }

 
  return (
    <React.Fragment>
      <div className="app">
        <div className="rectangle">
          <div className="search-rectangle">
            <SearchIcon className="search-icon" />
            <input            
              type="text"
              style={{ border: 'none' }}
              className="search-product"
              placeholder="Search products"              
              // onChange={handleSearchTerm}
            />
          </div>
          <h4 className="create-transaction">Create transaction</h4>
          {/* products comes here  */}
          {items
            ? items.map((item) => (
                <Product
                  productId={item.id}
                  item={item}
                  key={Math.random()}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  count={item.quantity}
                  cartItems={cartItems}
                  setSearchResults= {setSearchResults}
                  searchResults={searchResults}
                  // searchTerm= {searchTerm}
                  // searchHandler= {searchHandler}                

                />
              ))
            : 'No data'}
          <div className="rectangle-total">
            <h5 className="total-amount">Total amount</h5>
            <span className="kes">KES- {totalAmount}</span>

            {/* <div className='done-rectangle'> */}

            <div className="done-rectangle">
              <button className="done-button">
                Done
                <ArrowForwardIcon className="done-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
