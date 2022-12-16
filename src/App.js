import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { UserAuthContextProvider } from './context/userAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
   <>

       <Router>
       <UserAuthContextProvider>

        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        </Routes>
        </UserAuthContextProvider>
       </Router>

   </>
  );
}

export default App;
