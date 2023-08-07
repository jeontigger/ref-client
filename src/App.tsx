import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteConst} from "./interface/RouteConst";
import {LandingPage} from "./pages/landingPage";
import { Homepage } from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={RouteConst.LandingPage} element={<LandingPage/>}/>
            <Route path={RouteConst.HomePage} element={<Homepage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
