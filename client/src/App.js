import List from './components/List';
import Title from './components/Title';
import Searchbar from './components/Searchbar';
import './css/App.css';

function App(foodList) {
  return (
    <div className="App">
      <Title />
      <Searchbar />
      <List />
    </div>
  );
}

export default App;
