
import './App.css';
import DetailPage from './pages/details-page/DetailPage';
import FirstPage from './pages/first-page/FirstPage';
import ResultPage from './pages/result-page/ResultPage';

export default function App() {
  return (
    <div className="App">
      <h1>My vegetarian recipes app</h1>
      <FirstPage />
      <ResultPage />
      <DetailPage />
      <ComboPage />
    </div>
  );
}

