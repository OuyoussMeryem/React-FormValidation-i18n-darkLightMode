import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormValidation from './pages/formValidation';
import Test from './pages/test';
import Navbar from './components/navbar';
import ThemeProvider from './themeContext';
import './App.css';


export default function App() {
  
  
  
  
  return <>


    <ThemeProvider>
          <Navbar/>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<FormValidation/>}/>
                <Route path="/test" element={<Test/>}/>
              </Routes>
          </BrowserRouter>
    </ThemeProvider>
    

  </>
  
}


