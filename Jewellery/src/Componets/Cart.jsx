import PropTypes from "prop-types";

Cart.propTypes = {
  CartItems: PropTypes.array, // Validate CartItem as an array
  setItems: PropTypes.func,   // Validate setItem as a function
};

export function Cart({ CartItems }) {
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
           
              {CartItems.map((product) => (
                <tr key={product.data.id}>
                  <td>
                    <img src={product.data.image} alt={product.data.name} width="50" height="50" />
                    {product.data.name}
                  </td>
                  <td>RS. {product.data.price}</td>
                  <td>{product.data.quantity}</td>
                  <td>RS. {product.data.price * product.data.quantity}</td>
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

