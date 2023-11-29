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
import FetchCompo from './FetchComponent/FetchCompo';
import { Dispaly } from './AdminFormCompo/Display';
import Search from './assesment/Search';
import Faquestion from './assesment/Faquestion';
import FetchData from './CrudOperation/FetchData';
import Display from './CrudOperation/Display';
import RegisterPage from './ChatApp/RegisterPage';
import Home from './ChatApp/Home';
import Parent from './PropsDrilling/PropsDrill';
import PostsList from './Redux/features/posts/postsList';



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
     {/* <Mainsite/> */}
     {/* <FetchCompo/> */}
     {/* <Dispaly/> */}
     {/* <Search/> */}
     {/* <Faquestion/> */}
     {/* <Display/> */}
      <Home/>
      {/* <Parent/> */}
      {/* <PostsList/> */}
     
     

     
    </div>
  );
}

export default App;
