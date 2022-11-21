import './App.css';
import {React} from 'react';
import {Routes,Route} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
       

        </Routes>
    </div>
  );
}

export default App;
