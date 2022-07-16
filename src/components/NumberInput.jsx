import {Button} from '@chakra-ui/button';
import {Input} from '@chakra-ui/input';
import {HStack} from '@chakra-ui/layout';
import React from 'react';
import {useNumberInput} from '@chakra-ui/react';
import PropTypes from 'prop-types';

// Componente para el input number de la orden

export function HookUsage({value}) {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } =
    useNumberInput({
      step: 1,
      defaultValue: value || 1,
      precision: 0,
      min: 1,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW='320px'>
      <Button {...dec}>-</Button>
      <Input p="0" {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  );
}


HookUsage.propTypes = {
  value: PropTypes.number,
};
