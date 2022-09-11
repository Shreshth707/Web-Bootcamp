import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Button} from './Button';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <i className="navbar-brand" href="#">Adobe</i>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item ml-5">
                <Link to="/cart" className="nav-link">
                  <Button>
                    <span className='mr-2'>
                    <i className='fas fa-cart-plus mr-2' />
                     Cart
                    </span>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
