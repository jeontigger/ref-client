import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouteConst} from "./interface/RouteConst";
import {LandingPage} from "./pages/landingPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={RouteConst.LandingPage} element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
