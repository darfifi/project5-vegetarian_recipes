
import './App.css';
import HomePage from './pages/home-page/HomePage';
import ResultFail from './pages/result-fail/ResultFail';
import ResultList from './pages/result-list/ResultList';
import ResultDetail from './pages/result-detail/ResultDetail';



import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchresult/message" element={<ResultFail />} />
        <Route path="/searchresult/recipes" element={<ResultList />} />
        <Route path="/searchresult/recipes/detail" element={<ResultDetail />} />
      </Routes>
    </>
  );
}

