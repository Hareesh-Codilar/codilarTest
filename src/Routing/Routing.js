import React from "react";
import { Route, Switch } from "react-router";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Notfound from "../Components/Notfound/Notfound";
import Product from "../Components/Product/Product";

 function Routing() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/Product" component={Product} />
        <Route path='*' exact={false} component={Notfound} />
      </Switch>
    </>
  );
}
export default Routing;