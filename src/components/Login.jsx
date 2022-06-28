/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React from 'react';
import './Login.css';
import {
  Box,
  Stack,
  Container,
  SimpleGrid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import {
  EmailIcon,
  LockIcon,
} from '@chakra-ui/icons';
import logo from '../assets/maki-me-happy.svg';
import background from '../assets/login-bg.jpg';


export const Login = () => {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW="100vw"
        h="100vh"
        columns={{lg: 2, base: 2, sm: 1}}
        p={0}
      >
        <Box className="wrapper">
          <img className="bg" src={background} alt="background"/>
          <img className="logo" src={logo} alt="Logo" />
        </Box>
        <Stack
          pt="8em"
          placeSelf="center"
          spacing={{base: 10, md: 20}}>
          <Heading>
          </Heading>
          <Box as={'form'} mt={10} className="input-wrapper">
            <Stack spacing={4}>
              <InputGroup borderRadius="16px">
                <InputLeftElement
                  pointerEvents='none'
                  borderRadius="16px"
                  children={<EmailIcon color='#F98543' />}
                  bg={'gray.100'}
                  fontSize="21px"
                />
                <Input
                  borderRadius="16px"
                  variant='filled'
                  fontFamily={'Lato'}
                  placeholder="Correo electrónico"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  fontSize="21px"
                />
              </InputGroup>
              <InputGroup borderRadius="16px">
                <InputLeftElement
                  pointerEvents="none"
                  borderRadius="16px"
                  bg={'gray.100'}
                  children={<LockIcon color="#F98543" />}
                  fontSize="21px"
                />
                <Input
                  borderRadius="16px"
                  font-size="20px"
                  variant='filled'
                  placeholder="Contraseña"
                  fontFamily={'Lato'}
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  fontSize="21px"
                />
              </InputGroup>
            </Stack>
            <Button
              fontFamily={'Lato'}
              mt={8}
              w={'full'}
              borderRadius="16px"
              bgGradient="linear(to-r, red.600,red.500)"
              color={'white'}
              fontSize="20px"
              _hover={{
                bgGradient: 'linear(to-r, red.600,orange.400)',
                boxShadow: 'xl',
              }}>
              Iniciar sesión
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
};
