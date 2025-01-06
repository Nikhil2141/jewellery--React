import PropTypes from "prop-types";

Cart.propTypes = {
  CartItems: PropTypes.any, // Validate CartItem as an array
};

export function Cart({ CartItems }) {
  console.log({CartItems});
  
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {CartItems.length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>

<div>
  <p>Name:{CartItems.name}</p>
</div>

           
              {CartItems.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.id} alt={product.name} width="50" height="50" />
                    {product.name}
                  </td>
                  <td>RS. {product.price}</td>
                  <td>{product.quantity}</td>
                  <td>RS. {product.price * product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <a href="/">Back</a>
    </div>
  );
}

