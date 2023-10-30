import logo from './logo.svg';
import './App.css';
import Parent from './ParentChild/Parent';
import FilterableList from './ShareState/FilterableList';

function App() {
  return (
    <div className="App">
      {/* <Parent/> */}
      <FilterableList/>
    </div>
  );
}

export default App;
