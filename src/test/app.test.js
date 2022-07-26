import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from '../app.js';


test('renders learn react link', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  
  const inputUser = screen.getByPlaceholderText(/Usuario/i);
  expect(inputUser).toBeInTheDocument();

  const inputPassword = screen.getByPlaceholderText(/Contraseña/i);
  expect(inputPassword).toBeInTheDocument();
});

test('Clicking the Login button', () => {
  render(
    <BrowserRouter>
    <LogIn />
    </BrowserRouter>);

  const Button = screen.getByText('Iniciar sesión');
  expect(Button).not.toBeDisabled();
});