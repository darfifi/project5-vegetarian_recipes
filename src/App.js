import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { store } from './store/store';

// Import of pages components
import HomePage from './pages/home-page/HomePage';
import ResultList from './pages/result-list/ResultList';
import ResultDetail from './pages/result-detail/ResultDetail';

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchresult/recipes" element={<ResultList />} />
        <Route path="/searchresult/recipes/detail" element={<ResultDetail />} />
      </Routes>
    </Provider>
  );
}

