import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsRoute from './components/DetailsRoute';
import Header from './components/header';
import MenuRoute from './components/MenuRoute';
import SearchRoute from './components/SearchRoute';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/search" element={<SearchRoute />} />
        <Route path='/' element={<MenuRoute />} />
        <Route path='/details/:id' element={<DetailsRoute />} />
      </Routes>
    </div>
  );
}

export default App;
