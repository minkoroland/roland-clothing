import './shop.styles.scss';
import React, {Component} from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.sections.map(({id, ...otherProps})=>(
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        );
    }
}

export default Shop;