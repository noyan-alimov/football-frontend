import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from './components/header.component';
import { HomePage } from "./pages/homePage.component";
import { AddFootballPitch } from "./pages/addFootballPitch.component";
import { Calendar } from "./components/calendar.component";
import { Times } from "./components/times.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/addFootballPitch' component={AddFootballPitch} />
        <Route exact path='/footballPitch/:footballPitchId' component={Calendar} />
        <Route exact path='/footballPitch/:footballPitchId/dates/:dateId' component={Times} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
