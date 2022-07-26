import {
  Box,
  Grid,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState, useContext } from 'react';
import logo from '../assets/maki-me-happy.svg';
import { Order } from './Order';
import './Waiter.css';
import menu from '../menu.json';
import MenuList from './MenuLista';
export default function WaiterScreen() {
  const [data, setMenu] = useState(menu.makisclásicos);
  const ItemsMakisClasicos = () => {
    return setMenu(menu.makisclásicos);
  };

  const ItemsMakisEspeciales = () => {
    return setMenu(menu.makisespeciales);
  };

  const ItemsBebidas = () => {
    return setMenu(menu.bebidas);
  };

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
            <Button onClick={ItemsMakisClasicos}>category1</Button>
            <Button onClick={ItemsMakisEspeciales}>category2</Button>
            <Button onClick={ItemsBebidas}>category3</Button>
          </Grid>
          <Box bg="teal.200">
            <MenuList
              data={data}
              order={Order}
            />
          </Box>
        </Grid>
        <Order />
      </Grid>
    </Grid>
  );
};

