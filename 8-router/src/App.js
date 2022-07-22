import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

function Page1(){
  return "page1";
}
function Page2(){
  return "page2";
}
function Page3(){
  return <>
    Page 3
    <Outlet />
  </>
}
function Page4(){
  return "page4";
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/trending' element={<Page2 />} />
        <Route path='/hot' element={<Page3 />} >
          <Route path='test' element={<Page4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
