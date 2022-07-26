/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React, {useRef, useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {loginErrors} from '../utils/loginFunctions';
import {useNavigate, useLocation} from 'react-router-dom';
import {
  Box,
  Select,
  Stack,
  SimpleGrid,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import {EmailIcon, LockIcon} from '@chakra-ui/icons';
import logo from '../assets/maki-me-happy.svg';
import background from '../assets/login-bg.png';
import sushiGirl from '../assets/sushi-girl.png';
import './Login.css';

export default function Login() {
  // variable declarations
  const mailInputRef = useRef();
  const passwordInputRef = useRef();
  const workAreaRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const contextValue = useContext(AuthContext);

  const getInputValue = () => {
    // local variables
    const mailValue = mailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    const selectValue = workAreaRef.current.value;

    // Accedemos a funcion LogIn del componente context
    contextValue.logIn(mailValue, passwordValue).then((user) => {
      if (typeof user === 'string') {
        loginErrors(user);
      } else {
        if (selectValue === 'tables') {
          navigate('/waiter' + location.search);
        } else {
          navigate('/kitchen' + location.search);
        }
      }
    },
    );
  };

  return (
    <Box position={'relative'}>
      <SimpleGrid
        className="simple-grid"
        maxW="100vw"
        h="100vh"
        columns={{lg: 2, base: 2, sm: 1}}
        p={0}
      >
        <Box className="wrapper">
          <img className="bg" src={background} alt="background" />
          <img className="logo" src={logo} alt="Logo" />
        </Box>
        <Box
          pt="8em"
          placeSelf="center"
          spacing={{base: 10, md: 20}}>
          <Box as={'form'} mt={10} className="input-wrapper">
            <Box>
              <img className="desktop-img"
                src={sushiGirl}
                alt="girl eating sushi" />
            </Box>
            <Stack spacing={4}>
              <InputGroup borderRadius="16px">
                <InputLeftElement
                  pointerEvents='none'
                  borderRadius="16px"
                  children={
                    <EmailIcon color='#F98543' />
                  }
                  bg="gray.100"
                  fontSize="21px"
                />
                <Input
                  ref={mailInputRef}
                  borderRadius="16px"
                  variant="filled"
                  fontFamily="Lato"
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
                  children={
                    <LockIcon color="#F98543" />
                  }
                  fontSize="21px"
                />
                <Input
                  ref={passwordInputRef}
                  borderRadius="16px"
                  variant="filled"
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
              <InputGroup borderRadius="16px">
                <Select ref={workAreaRef}
                  placeholder="Selecciona una opción">
                  <option value="tables">Mesas</option>
                  <option value="kitchen">Cocina</option>
                </Select>
              </InputGroup>
            </Stack>
            <Button
              onClick={getInputValue}
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
              }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
