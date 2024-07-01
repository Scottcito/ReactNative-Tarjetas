import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Maestro from "./pages/Maestro"
import hooks from "./Hooks";
import Navegar from "./pages/navegar";
const App=()=>(

        <BrowserRouter>
        <Routes>
            <Route exact path="/raiz" element={<Maestro/>}></Route>
            <Route exact path="/boton" element={<Navegar/>}></Route>
            <Route exact path="/*" element={hooks}></Route>
        </Routes>
        </BrowserRouter>
)
export default App