import './App.css';
import Home from './components/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import Datils from './components/Datils';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='product' element={<Products/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='datils' element={<Datils/>}/>
         </Routes>
      </BrowserRouter>
            
    </div>
  );
}

export default App;
