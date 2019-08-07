import React from 'react';
import { Route } from 'react-router-dom';
import BadNews from './pages/BadNews';
import GoodNews from './pages/GoodNews';
import Really from './pages/Really';
import Exercises from './pages/Exercises';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/badnews" component={BadNews} />
      <Route path="/goodnews" component={GoodNews} />
      <Route path="/really" component={Really} />
      <Route path="/exercises" component={Exercises} />
      <Route path="/aboutme" component={AboutMe} />
    </div>
  );
}

export default App;