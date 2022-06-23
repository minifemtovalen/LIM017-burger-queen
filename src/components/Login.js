// este sera un login
import React from 'react';

function Login() {
  return (
    <div>
      <div className="login">
        <input placeholder='correo electronico' />
      </div>
      <div>
        <input placeholder='contraseña' />
      </div>
      <div>
        <button>iniciar sesión</button>

      </div>
    </div>
  );
}

export default Login;
