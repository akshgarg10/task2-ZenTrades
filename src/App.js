import logo from './logo.svg';
import './App.css';
import LoginForm from "../src/Components/LoginForm"
import MetricsPage from './Components/MetricsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm/> }/>
      <Route path='/metrics' element={<MetricsPage/>}/>
    </Routes>
    </BrowserRouter>     
    </>
  );
}

export default App;
