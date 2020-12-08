
import './App.scss';
import CardList from './components/CardList';
import SnowStorm from 'react-snowstorm';

function App() {
  return (
    <div className="app-wrapper">
      <SnowStorm/>
      <CardList/>
    </div>
  );
}

export default App;
