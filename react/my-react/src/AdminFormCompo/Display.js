import AdminTable from "./AdminTable";
import LoginForm from "./LoginFrom";

import { BrowserRouter,Route,Routes } from "react-router-dom";
import './form.css'
import RegistrationForm from "./RegistrationForm";
import DetailsComponent from "./DetailsComponent";
export function Dispaly(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>}> </Route>
          <Route path='/registration' element={<RegistrationForm/>}></Route>
          <Route path='/adminTable' element={<AdminTable/>}></Route>
          <Route path='/details' element={<DetailsComponent/>}></Route>
        </Routes>
     </BrowserRouter>
    )
}