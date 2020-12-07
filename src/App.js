
import './App.scss';
import CardList from './components/CardList';
import SnowStorm from 'react-snowstorm';

function App() {
  return (
    <div className="app-wrapper">
      <SnowStorm/>
      <h1 className="title">Funny Gif</h1>
    <CardList/>
    </div>
  );
}

export default App;
