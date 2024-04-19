import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";
import {Route, Routes} from "react-router-dom";


function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/createAccount" element={<RegisterUser></RegisterUser>}></Route>
        </Routes>
    )
}

export default RoutesApp;