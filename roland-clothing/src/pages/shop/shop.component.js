import './shop.styles.scss';
import React, {Component} from 'react';
import SHOP_DATA from './shop.data';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {SHOP_DATA.map(({title}) => title)}
            </div>
        );
    }
}

export default Shop;