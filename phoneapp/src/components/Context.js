import React, {Component } from "react";
// import {storeProducts} from './data';
import axios from "axios";
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        cart: []
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        // let prds = [];
        // storeProducts.forEach(p => {
        //     prds.push({...p});
        // });
        // this.setState({
        //     products: prds
        // })

        axios.get('http://localhost:1234/products').then( response => {
            this.setState({
                products: response.data
            })
        });
    }

    increment = (id) => {
        let prd = this.state.products.find(p => p.id === id);
        prd.count++;
        prd.total = prd.price * prd.count;
        // force reconcillation
        this.setState({
            cart: this.state.cart
        })
    }
    // placing order
    checkout = () => {
        // on login user data i will store in window.sessionStorage
        let customer = window.sessionStorage.getItem("user");
        let order = {
            "customer": customer,
            "orderDate": new Date(),
            "items": this.state.cart
        }
        axios.post("http://localhost:1234/orders", order).then(response => {
            alert("order placed!!!");
            this.setState({
                cart: []
            })
        });


    }

    addToCart = (id) => {
        let prd = this.state.products.find(p => p.id === id);
        prd.count = 1;
        prd.total = prd.price;
        prd.inCart = true;
        let cpyCart = this.state.cart;
        cpyCart.push(prd); // adding refernce not a copy
        this.setState({
            cart: cpyCart
        })
    }
    render() {
        return <ProductContext.Provider value={{...this.state, 
        addToCart: this.addToCart,
        checkout: this.checkout}}>
            {this.props.children}
        </ProductContext.Provider>
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductContext, ProductConsumer};