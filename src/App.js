import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from './components/header.component';
import { HomePage } from "./pages/homePage.component";
import { AddFootballPitch } from "./pages/addFootballPitch.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/addFootballPitch' component={AddFootballPitch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
