import React from 'react';
import {Grid} from '@chakra-ui/layout';
import {Text} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {HookUsage} from './NumberInput';
import './OrderItems.css';

// Estos son los productos agregados a la orden.
export const OrderItems = () => {
  return (
    <Grid gridTemplateRows="45px 1fr">
      <Grid
        gridTemplateColumns="repeat(2, 1fr) 55px"
        border="1px solid #F98543"
        borderRadius="20px"
        placeItems="center"
        paddingRight="10px"
      >
        <Text className="order-description">Producto</Text>
        <Text className="order-description">unidades</Text>
        <Text className="order-description">s/</Text>
      </Grid>
      <Grid>
        <ProductItem
          name="Maki California"
          quantity={1}
          price={22}
        />
      </Grid>
    </Grid>
  );
};

const ProductItem = ({name, quantity, price}) => {
  return (
    <Grid placeItems="center" gridTemplateColumns="repeat(3, auto)">
      <Text>{name}</Text>
      <HookUsage />
      <Text>{price}</Text>
    </Grid>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
