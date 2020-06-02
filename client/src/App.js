import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './views/Home';
import PlayerInfo from './views/PlayerInfo';
import Matches from './views/Matches';
import MatchInfo from './views/MatchInfo';
import Points from './views/Points';
import Winner from './views/Winner';
import './App.css';

function App() {
  return (
    <div className='screen'>
      <Router>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>Cricket-Tournament</Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/matches'>Matches</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/points-table'>Points-Table</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/matches' component={Matches} />
            <Route exact path='/match-info/:id' component={MatchInfo} />
            <Route exact path='/player-info/:id' component={PlayerInfo} />
            <Route exact path='/points-table' component={Points} />
            <Route exact path='/winner-details/:id' component={Winner} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
