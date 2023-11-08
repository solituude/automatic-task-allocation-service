import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./Pages/StartPage/StartPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ManagerHomepage from "./Pages/ManagerHomepage/ManagerHomepage";
import PointsInfoPage from "./Pages/PointsInfoPage/PointsInfoPage";
import ManualPage from "./Pages/ManualPage/ManualPage";
import TaskDistribution from "./Pages/TaskDistributionPage/TaskDistribution";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<StartPage/>}/>
                    <Route path='/start' element={<StartPage/>}/>
                    <Route path='/signup' element={<SignUpPage/>}/>
                    <Route path='/login' element={<LogInPage/>}/>
                    <Route path='/managerHomepage' element={<ManagerHomepage/>}/>
                    <Route path='/pointsInfo' element={<PointsInfoPage/>}/>
                    <Route path='/handBook' element={<ManualPage/>}/>
                    <Route path='/taskDistribution' element={<TaskDistribution/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
