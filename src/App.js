import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./Pages/StartPage/StartPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LogInPage from "./Pages/LogInPage/LogInPage";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<StartPage/>}/>
                    <Route path='/start' element={<StartPage/>}/>
                    <Route path='/signup' element={<SignUpPage/>}/>
                    <Route path='/login' element={<LogInPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
