import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard'
import Header from './Header'
import PRODUCTS from './products'

const styles = {
  products: {
    paddingTop: 20
  },
  product: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 15
  }
}

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
    const { classes } = this.props

    return (
      <>
        <Header />
        <Grid container className={classes.products}>
          {PRODUCTS.map(product => (
            <Grid item xs={3} key={product.id} className={classes.product}>
              <ProductCard
                id={product.id}
                image={product.imageURL}
                name={product.name}
                price={product.price}
                description={product.description}
                addToCart={this.handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(App);
