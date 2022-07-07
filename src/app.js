import LogIn from "./components/Login";
// import Staff from "./Components/Staff";
// import Cooking from "./Components/Cooking";
import { AuthProvider } from './firebase/AuthContext';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LogIn />} />
        
      </Routes>
    </AuthProvider>
    );
}

export default App;
