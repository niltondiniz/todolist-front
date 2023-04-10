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
import { Routes, Route, HashRouter } from 'react-router-dom';
import UserController from './user/controllers/user-controller';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LogoutController from './login/controllers/logout-controller';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <ThemeProvider theme={themeOptions}>
    <GoogleOAuthProvider clientId="716810883559-kospcu6bvp32vgr2uvgq9u8emqg8fm6q.apps.googleusercontent.com">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginController/>} />
          <Route path="/login" element={<LoginController/>} />
          <Route path="/logout" element={<LogoutController />} />
          <Route path="/home" element={<HomeController />} />
          <Route path="/profile" element={<UserController />} />
        </Routes>
      </HashRouter>
    </GoogleOAuthProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
