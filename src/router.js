import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main"
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FindPassword from "./pages/FindPassword"
import ProductRegister from "./pages/ProductRegister";
import PasswordChagne from "./pages/PasswordChagne";
import Profile from "./pages/Profile";
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
    },
    {
        path: "/userinfo/:id",
        element: <Profile/>
    }
])
export default router