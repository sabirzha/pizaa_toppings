import React, {Component} from 'react';
import ProductRow from './ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                column: 'price',
                direction: 'asc'
            }
        };
        this.sortByColumnAndDirection = this.sortByColumnAndDirection.bind(this);
    }

    sortByColumnAndDirection(objectA, objectB) {
        let isDesc = this.state.sort.direction === 'desc' ? -1 : 1;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price') {
            [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d.]/g, ''), ''), 10);     
        }
        if (a > b) {
            return 1 * isDesc;
        }
        if (a < b) {
            return -1 * isDesc;
        }
        return;
    }


    sortProducts() {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        return productsAsArray.sort(this.sortByColumnAndDirection);
    }


    render() {
        let rows = [];
        this.sortProducts().forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            rows.push (
                <ProductRow 
                    product={product} 
                    key={product.id} 
                />
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <SortableColumnHeader 
                            column="name"
                            currentSort={this.state.sort}
                        />
                        <SortableColumnHeader 
                            column="price"
                            currentSort={this.state.sort}
                        />
                        <SortableColumnHeader 
                            column="category"
                            currentSort={this.state.sort}
                        />
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;