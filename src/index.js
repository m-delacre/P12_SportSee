import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import UserProfileMocked from './pages/UserProfileMocked';
import App from './app';
import ErrorPage from './pages/errorPage/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          {/*Page d'acceuil*/}
          <Route exact path="/" element={<App/>}/>
          {/*Page user api*/}
          <Route path="userProfil/:userid" element={<UserProfile/>} />
          {/*Page user api*/}
          <Route path="mockUserProfil/:mockuserid" element={<UserProfileMocked/>} />
          {/*Page erreur*/}
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </Router>
  </React.StrictMode>
);
