import logo from './logo.svg';
import './App.css';
import { Register } from './components/registerpage/register';
import { Login } from './components/loginpage/login';
import { Home } from './components/homepage/home';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/hoc/protectedroute';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
      <Route path='/login' element={ <Login></Login> }></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
