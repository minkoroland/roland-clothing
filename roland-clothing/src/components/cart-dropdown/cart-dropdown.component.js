import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { 
        cartItems.length ? (
          cartItems.map(({id, ...otherProps}) => (
            <CartItem key={id} {...otherProps} ></CartItem>
          )))
          : (
            <span className="empty-message">Your cart is empty</span>
          )        
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps=({cart})=>({
  cartItems: cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);
