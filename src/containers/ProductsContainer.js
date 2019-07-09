import React, { Component } from 'react';
import Products from '../components/Products';
import { connect } from 'react-redux';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products products={ products} />
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, null)(ProductsContainer);