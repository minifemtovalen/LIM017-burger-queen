import Swal from 'sweetalert2';
export const validateEmail = (email) => {
  const expression = /^([\.\_a-zA-Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}/;

  if (!email) {
    return false;
  }

  return typeof email === 'string' ?
    expression.test(email.trim()) :
    expression.test(`${email}`);
};

export const validateEmailDomains = (name) => {
  const expression = /\w+([-+.]\w+)*@(hotmail\.com|gmail\.com|outlook\.com)/;

  return expression.test(name);
};

export const validatePassword = (pwd) => {
  return pwd.trim().length >= 6;
};

export const loginErrors = (user) => {
  let msg = '';
  switch (user) {
    case 'Firebase: Error (auth/internal-error).':
      msg ='Ingresar contraseña';
      break;
    case 'Firebase: Error (auth/invalid-email).':
      msg ='Email invalido';
      break;
    case 'Firebase: Error (auth/user-not-found).':
      msg ='Usuario no encontrado';
      break;
    case 'Firebase: Error (auth/wrong-password).':
      msg ='Contraseña incorrecta';
      break;
    case 'Firebase: Error (auth/missing-email).':
      msg ='Ingresar email';
      break;
    default:
      break;
  }
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: msg,
  });
};
