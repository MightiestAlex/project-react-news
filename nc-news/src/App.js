import { Routes, Route } from 'react-router-dom';
//import './styles/App.css';

import Home from './components/Home.jsx';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
