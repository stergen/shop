import React from 'react';
import './App.css';
import ProductCard from './ProductCard'
import Header from './Header'

const PRODUCTS = [
  {
    id: 1,
    name: 'First',
    price: 100,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
  },
  {
    id: 2,
    name: 'Second',
    price: 200,
    description: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. `
  }
];


class App extends React.Component {
  state = {
    cart: []
  }

  handleClick = ({ currentTarget }) => {
    const ID = parseInt(currentTarget.dataset.id)

    this.setState({
      cart: [
        ...this.state.cart,
        ID
      ]
    })
  }

  render() {

    return (
      <>
        <Header />
        <section>
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              addToCart={this.handleClick}
            />
          ))}
        </section>
      </>
    );
  }
}

export default App;
