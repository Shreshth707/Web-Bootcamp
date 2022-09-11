import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ProductConsumer } from './Context';

export default class Product extends Component {
  render() {
    let { id, img, inCart } = this.props.product;
    return (
      <div className='col-md-4 col-lg-3'>
        <div className='card my-2'>
          <div className='img-container'>
            <ProductConsumer>
              {
                value => {
                  return <>
                    <Link to={`/details/${id}`}>
                      <img src={img} className='card-img-top' />
                    </Link>
                    {
                      inCart? <Button className='cart-btn'>
                        InCart
                    </Button>:
                    <Button className='cart-btn fas fa-cart-plus'
                    onClick={() => value.addToCart(id)}>
                  </Button>
                    }
                    
                  </>
                }
              }
            </ProductConsumer>
          </div>
        </div>
      </div>
    )
  }


}

