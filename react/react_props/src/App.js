import data from './props/json.json'; // Import the JSON data
import './App.css'
import Readjson from './props/readjson';
import LoadJSON from './props/LoadJSON';
import Image from './Describe-UI/Image';
import Itempack from './conditional-render/ItemPack';
import { people } from './conditional-render/Scientist';
import DisplaySc from './conditional-render/DisplaySc';
import Impure from './Describe-UI/Impure';


function App() {
  const chemist = people.filter((people)=>people.profession=='chemist') 
  const remainingSc = people.filter(people=>people.profession!='chemist')
  return (
    <div className="App">
      {/* <Readjson/>
      <LoadJSON/> */}
      {/* <Image profession='doctor' awards='5' discovered='hiv medicine'/>
      <Image profession='doctor' awards = '2' discovered = 'aids medicine' year='1999'/>
      <Itempack name='dhanush' isPacked={true}/>
      <Itempack name='dhan' iusPacked={false}/> */}
      {/* <DisplaySc people={chemist} title='chemist'/>
      <DisplaySc people ={remainingSc} title='remaining'/> */}
      <Impure/>
      {/* <Impure/> */}

    </div>
  );
}

export default App;