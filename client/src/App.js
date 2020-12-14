import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { getLocation } from './APIServices';
import { setStoredLocation, getStoredLocation } from './util';

import { Home } from './pages/Home';
import { DangerIdentifier } from './pages/DangerIdentifier';
import { News } from './pages/News';
import { Trails } from './pages/services/Trails';
import { Preserves } from './pages/services/Preserves';
import { Campgrounds } from './pages/services/Campgrounds';
import { OutdoorStores } from './pages/services/OutdoorStores';

import logo from './asset/tent.png';

// handels the user's location storage and app routes
function App() {
  //envoks the location function stores it in local storage
  useEffect(() => {
    getLocation().then((location) => {
      setStoredLocation(location); // store it in localStorage
    });
  }, []);

  // gets location from local storage to be passed to the routes
  const position = getStoredLocation();
  return (
    <Router>
      <Navbar
        className="navbar"
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        sticky="top"
      >
        <Navbar.Brand as={Link} className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
          OUTDOORS GYPSY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="trails">
                Trails
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="preserves">
                Nature Preserves
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="campgrounds">
                Campground
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="outdoor-stores">
                Outdoor Stores
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="danger-identifier">
              Danger Identifier
            </Nav.Link>
            <Nav.Link as={Link} to="news">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home location={position} />
        </Route>
        <Route path="/danger-identifier">
          <DangerIdentifier location={position} />
        </Route>
        <Route path="/events"></Route>
        <Route path="/trails">
          <Trails location={position} />
        </Route>
        <Route path="/preserves">
          <Preserves location={position} />
        </Route>
        <Route path="/campgrounds">
          <Campgrounds location={position} />
        </Route>
        <Route path="/outdoor-stores">
          <OutdoorStores location={position} />
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
