import React from 'react'
import PropTypes from 'prop-types'

class ProductCard extends React.PureComponent {
  render() {
    const { id, name, description, price, addToCart } = this.props;

    return (
      <div className='product-card'>
        <strong>{name}</strong>

        {description !== null && (
          <p>{description}</p>
        )}

        <b>{`${price}$`}</b>
        <br />

        {addToCart !== null && (
          <button data-id={id} onClick={addToCart} >Add to cart</button>
        )}
      </div>
    )
  }
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,

  addToCart: PropTypes.func,
  description: PropTypes.string
}

ProductCard.defaultProps = {
  addToCart: null,
  description: null
}

export default ProductCard
