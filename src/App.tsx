import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import GamePage from './components/GamePage';
import HistoryPage from './components/HistoryPage';
import StatsPage from './components/StatsPage';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/history" element={<HistoryPage />} /> 
        <Route path="/stats" element={<StatsPage />} /> 
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;