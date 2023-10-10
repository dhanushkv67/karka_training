import data from './Components/json.json'; // Import the JSON data
import './App.css'
import Readjson from './Components/readjson';
import LoadJSON from './Components/LoadJSON';


function App() {
  return (
    <div className="App">
      <Readjson/>
      <LoadJSON/>
    </div>
  );
}

export default App;