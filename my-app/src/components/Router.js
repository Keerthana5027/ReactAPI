import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Session from "./Session";
import Signin from "./Signin";
import Signout from "./Signout";
import Jewelery from "./Jewelery";
import Electronics from "./Electronics";
import Menclothing from "./Menclothing";
import Womenclothing from "./Womenclothing"

function Router(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Session />}>
              <Route path="sign-in" element={<Signin />} /> 
              <Route path="sign-out" element={<Signout />} />
              <Route path="jewelery" element={<Jewelery/>} />
              <Route path="Electronics" element={<Electronics/>} />
              <Route path="Men's clothing" element={<Menclothing/>} />
              <Route path="Women's clothing" element={<Womenclothing/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}
export default Router