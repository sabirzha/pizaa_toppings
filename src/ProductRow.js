import React, {Component} from 'react';
import './ProductRow.css';

class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    <span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock'}>
                        {this.props.product.name}
                     </span>
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    {this.props.product.category}
                </td>
                <td>
                    <button>x</button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;