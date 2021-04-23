import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AddProduct from '../pages/AddProduct';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import Register from '../pages/Register';
import UpdateProduct from '../pages/UpdateProduct';
import Users from '../pages/Users';
import PrivateRoute from './PrivateRoute';
function Router() {
  return (
    <Switch>
      <PrivateRoute exact path='/' privateComponent={Home}/>
      <PrivateRoute exact path='/home' privateComponent={Dashboard}/>
      <PrivateRoute exact path='/home/users' privateComponent={Users}/>
      <PrivateRoute exact path='/home/products' privateComponent={Product}/>
      <PrivateRoute exact path='/home/products/update/:id' privateComponent={UpdateProduct}/>
      <PrivateRoute exact path='/home/products/add' privateComponent={AddProduct}/>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
    </Switch>
  )
}

export default Router
