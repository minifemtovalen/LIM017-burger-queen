import React from 'react';
import {IconButton} from '@chakra-ui/button';
import {DeleteIcon} from '@chakra-ui/icons';
import {Input} from '@chakra-ui/input';
import {Grid, Heading} from '@chakra-ui/layout';
import {OrderItems} from './OrderItems';
import './Order.css';

// Exportamos componente Order (lado derecho del figma)a Waiter.jsx
export const Order = () => (
  <Grid
    bg="white"
    p="1em"
    borderRadius="12"
  >
    <Heading size="lg" className="header">
      Order
    </Heading>
    <Grid gridTemplateColumns="1fr 1fr 3em" gap="1em">
      <Input
        placeholder="N# Mesa"
        className="input-styles table-number"
        bg="white"
        _placeholder={{opacity: 1, color: '#AEB0C3'}}
      />
      <Input
        placeholder="Cliente"
        className="input-styles client"
        bg="white"
        _placeholder={{opacity: 1, color: '#AEB0C3'}}
      />
      <IconButton
        className="delete-order"
        icon={<DeleteIcon />}
        bg="#F98543"
        color="white"
        borderRadius="12px"
      >
      </IconButton>
    </Grid>
    <OrderItems />
  </Grid>
);
