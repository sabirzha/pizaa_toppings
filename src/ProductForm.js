import React, {Component} from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }

    }
    render() {
        return (
            <form>
                <h3>Enter a new product</h3>
                <p>
                    <label>
                        Name
                        <br />
                        <input type="text" name="name" />
                    </label>
                </p>
                <p>
                    <label>
                        Category
                        <br />
                        <input type="text" name="category" />
                    </label>
                </p>
                <p>
                    <label>
                        Price
                        <br />
                        <input type="text" name="price" />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked" />
                        &nbsp;In Stock?
                    </label>
                </p>
                <input type="submit" value="Save" />
            </form>
        );
    }
}

export default ProductForm;