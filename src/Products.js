import React, {Component} from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm.js';

const products = [
    {id: 1, category: 'Instruments', price: '$459.99', stocked: true, name: 'Guitar'},
    {id: 2, category: 'Instruments', price: '$3,300', stocked: true, name: 'Baby Piano'},
    {id: 3, category: 'Instruments', price: '$9,999', stocked: false, name: 'Grand Piano'},
    {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Couch'},
    {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
    {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Chair'},
    {id: 7, category: 'Clothes', price: '$355', stocked: true, name: 'Leather Jacket'},
    {id: 8, category: 'Clothes', price: '$150', stocked: false, name: 'Classic Jeans'},
    {id: 9, category: 'Clothes', price: '$50', stocked: true, name: 'Swimming Shorts'} 
];

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inStockOnly: false,
            filterText: '',
            products: products
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }
    
    handleFilter(filterInput) {
        this.setState(filterInput);
    }

    removeProduct() {
        console.log('delete')
    }
    
    render () {
        return (
            <div>
                <Filters 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilter={this.handleFilter}
                />
                <ProductTable 
                    products={products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <button onClick={this.props.removeProduct()}>   
                    Add Product
                </button>
                <ProductForm />
            </div>
        );
    }
}

export default Products;