import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

export const App: React.FC = () => (
  <>
    <NavBar />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />

          <Route path="home" element={<Navigate to="/" />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
