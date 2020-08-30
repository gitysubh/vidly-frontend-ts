import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './app.css';
import Movies from '../../pages/movies';
import Register from '../../pages/register';
import Login from '../../pages/login';
import Navbar from '../navbar';

export interface AppProps {
  
}
 
const App: React.SFC<AppProps> = () => {
  return ( 
    <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/register" component={Register} />
            {/* <ProtectedRoute
              path="/movies/:id"
              component={MoviesForm}
              role="admin"
            /> */}
            <Route path="/movies" component={Movies} />
            <Route path="/customers" render={() => <h1>Customers</h1>} />
            <Route path="/Rental" render={() => <h1>Rental</h1>} />
            <Route path="/login" component={Login} />
            {/* <Route path="/logout" component={Logout} /> */}
            <Route path="/404" render={() => <h1>Not Found</h1>} />
            <Redirect from="/" to="/movies" exact />
            <Redirect to="/404" />
          </Switch>
        </main>
      </BrowserRouter>
   );
}
 
export default App;