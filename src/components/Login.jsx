/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React from 'react';
import './Login.css';
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import {
  EmailIcon,
  LockIcon,
} from '@chakra-ui/icons';


export const Login = () => {
  return (
    <div className="Login">
      <LoginInputs />
      <Button
        colorScheme='red'
        variant='solid'>
    Iniciar sesión
      </Button>
    </div>
  );
};


function LoginInputs() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<EmailIcon color='#F98543' />}
        />
        <Input type='tel' placeholder='Correo electrónico ' size='sm' />
      </InputGroup>

      <InputGroup size='sm'>
        <InputLeftElement
          pointerEvents='none'
          children={<LockIcon color='#F98543' />}
        />
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Contraseña'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='xs' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
}
