import { BrowserRouter,Route,Routes } from "react-router-dom";
import FetchData from "./FetchData";
import ReactTable from "./ReactTable";
import ViewDetails from "./ViewDetails";
import CardView from "./CardView";

export default function Display(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FetchData/>}></Route>
                    <Route path="/reactTable" element={<ReactTable/>}></Route>
                    <Route path="/viewDetails" element={<ViewDetails/>}></Route>
                    <Route path="/card" element={<CardView/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}