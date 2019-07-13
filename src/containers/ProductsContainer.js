import React, { Component } from 'react';
import Products from '../components/Products';
import Product from "../components/Product";
import { connect } from "react-redux";

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    
    showProducts = (products) => {
        var elmProducts = [];
        if(products){
            elmProducts = products.map(
                product => {
                    return <Product key={ product.id } product={ product }/>
                }
            );
        }
        return elmProducts;
    }
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, null)(ProductsContainer);