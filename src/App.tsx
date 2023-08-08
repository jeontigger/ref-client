import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteConst} from "./interface/RouteConst";
import { Homepage } from './pages/HomePage';
import { SignUp } from './pages/SignUp';
import { Calculate } from './pages/Calculate';
import { CookingDB } from './pages/CookingDB';
import { Inventory } from './pages/Inventory';
import { Settlement } from './pages/Settlement';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={RouteConst.HomePage} element={<Homepage/>}/>
            <Route path={RouteConst.Signup} element={<SignUp/>}/>
            <Route path={RouteConst.Calculate} element={<Calculate/>}/>
            <Route path={RouteConst.CookingDB} element={<CookingDB/>}/>
            <Route path={RouteConst.Inventory} element={<Inventory/>}/>
            <Route path={RouteConst.Settlement} element={<Settlement/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
