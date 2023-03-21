import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeController from './home/controllers/home-controller';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginController from './login/controllers/login-controller';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from './shared/config/theme-options';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={themeOptions}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginController />} />
        <Route path="/home" element={<HomeController />} />
      </Routes>    
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
