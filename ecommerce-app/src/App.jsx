import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import History from './pages/History';
import ProductDetail from './pages/ProductDetail';
import MyNavbar from './components/mynavbar';



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
             <MyNavbar />
                <Switch>
                   <Route component={Login} path="/Login" />
                   <Route component={Register} path="/Register" />
                   <Route component={Admin} path="/Admin" />
                   <Route component={Cart} path="/Cart" />
                   <Route component={History} path="/History" />
                   <Route component={ProductDetail} path="/Product-Detail" />
                   <Route component={Home} path="/" /> 
                </Switch>    
            </BrowserRouter>
            
        )
    }
}

export default App;
