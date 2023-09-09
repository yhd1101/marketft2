import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main"
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RegisterProduct from "./pages/RegisterProduct";
import NewPassword from "./pages/NewPassword"
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
        path:"/register/product",
        element: <RegisterProduct/>
    },
    {
        path:"/NewPassword",
        element: <NewPassword/>
    }
])
export default router