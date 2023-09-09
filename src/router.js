import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main"
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FindPassword from "./pages/FindPassword"
import ProductRegister from "./pages/ProductRegister";
import PasswordChagne from "./pages/PasswordChagne";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path:"/signup",
        element: <Signup/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path: "/product/:productId",
        element: <ProductDetail/>
    },
    {
        path:"/forgot/password",
        element: <FindPassword/>
    },
    {
        path:"/productRegister",
        element: <ProductRegister/>
    },
    {
        path:"/change/password",
        element: <PasswordChagne/>
    }
])
export default router