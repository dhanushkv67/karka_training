import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import ChangeColor from './components/ChangeColor';
import ImageSlider from './components/ImageSlider';
import ImgComp from './components/ImgComp';
import ImgHoverSlider from './components/ImgHoverSlider';
import MultiSelect from './components/MultiSelect';
import Profile from './components/Profile';   
import FormComp from './FormComponent/FormComp';
import FormJson from './FormComponent/FormJson';
import FormValid from './FormComponent/FormValidBs';
import FormValidation from './FormComponent/FormValidation';
import FormRedirect from './FormComponent/FormRedirect';
import TodoComp from './TodoComponent/todocomp';
import InputBox from './RefComp/InputBox';
import Mainsite from './ECommerce/Mainsite';


function App() {
  return (
    <div className="App">
      {/* <ImgComp name="dhanush"/>
      <Profile/> */}
      {/* <Calculator/> */}
      {/* <MultiSelect/> */}
     {/* < ImageSlider/> */}
     {/* <ImgHoverSlider/> */}
     {/* <ChangeColor/> */}
     {/* <FormComp/> */}
     {/* <FormJson/> */}
     {/* <FormValid/> */}
     {/* <BrowserRouter>
      <Routes>
        <Route path='/LoginPage' element={<FormRedirect/>}></Route>
        <Route path='/' element={<FormValidation/>}></Route>
      </Routes>
     </BrowserRouter> */}
     {/* <TodoComp/> */}
     {/* <InputBox/> */}
     <Mainsite/>
     
    </div>
  );
}

export default App;
