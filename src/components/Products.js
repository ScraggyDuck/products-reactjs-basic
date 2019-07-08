import React, { Component } from 'react';
import Product from "./Product";
import { connect } from 'react-redux';

class Products extends Component {
    render() {
        var { products } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    { this.showProducts(products) }
                </div >
            </section>
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

export default connect(mapStateToProps, null)(Products);