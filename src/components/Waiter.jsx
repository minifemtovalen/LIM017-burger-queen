import {
  Box,
  Grid,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/maki-me-happy.svg';
import {Order} from './Order';
import './Waiter.css';

export default function WaiterScreen() {
  return (
    <Grid
      gridTemplateRows={'4em 1fr'}
      className="component-wrapper"
      h="100vh"
    >
      <Grid
        gridTemplateColumns="3em 1fr"
      >
        <Box placeSelf="center">
          <img width="100px" src={logo} alt="Logo" />
        </Box>
        <Box
        >
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 0.8fr"
        gap="2em"
        margin="2em"
      >
        <Grid
          gridTemplateRows="3em 1fr"
          borderRadius="12px"
          overflow="hidden"
        >
          <Grid
            bg="yellow.300"
            gridTemplateColumns="repeat(4, 1fr)"
            gap="1em"
          >
            <Button>all</Button>
            <Button>category1</Button>
            <Button>category2</Button>
            <Button>category3</Button>
          </Grid>
          <Box bg="teal.200">
            <Text>Este texto va a
              ser reemplazado por
              un componente Item.jsx
              , el cual se va a
              llamar varias veces</Text>
          </Box>
        </Grid>
        <Order/>
      </Grid>
    </Grid>
  );
};

