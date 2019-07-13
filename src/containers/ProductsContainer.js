import React, { Component } from 'react';
import Products from '../components/Products';
import Product from "../components/Product";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

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

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
        })
    ).isRequired
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, null)(ProductsContainer);