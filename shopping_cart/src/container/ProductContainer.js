import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import * as config from '../contants/config';

import ListProduct from '../components/ListProduct';
import ItemProduct from "../components/ItemProduct";

function ProductsContainer (){
    const products = useSelector(state => state.product);
    
    function showElementItems(products){
      let xhtml = <b>{config.NOTI_EMPTY_PRODUCT}</b>
      if(products.length > 0){
          xhtml = products.map((items, index) => {
              return(
                  <ItemProduct key={index} items={items} />
              )
          })
      }
      return xhtml;
  }
    return(
        <ListProduct products={products}>
          {showElementItems(products)}
        </ListProduct>
    )
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      canBuy: PropTypes.bool.isRequired
    })),
    addToCart: PropTypes.func
  }

export default ProductsContainer