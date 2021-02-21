
import './App.css';
import ResultsContainer from './containers/ResultsContainer';
import SearchContainer from './containers/SearchContainer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Midterm - Movie App</h1>
        <SearchContainer/>
        <ResultsContainer/>
      </header>
    </div>
  );
}

export default App;
