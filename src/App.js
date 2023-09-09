import logo from './logo.svg';
import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header/>
      <RouterProvider router={router} />
        <Footer/>
    </div>
  );
}

export default App;
