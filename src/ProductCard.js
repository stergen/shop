import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import AddToCart from '@material-ui/icons/AddShoppingCart'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px'
  }
};

class ProductCard extends React.PureComponent {
  render() {
    const { id, name, image, description, price, addToCart, classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.footer}>
          <Typography gutterBottom variant="h5">{price}</Typography>
          <IconButton data-id={id} color="primary" onClick={addToCart}>
            <AddToCart />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,

  addToCart: PropTypes.func,
  description: PropTypes.string,

  classes: PropTypes.object.isRequired // provided by HOC withStyles
}

ProductCard.defaultProps = {
  addToCart: null,
  description: null
}

export default withStyles(styles)(ProductCard)
