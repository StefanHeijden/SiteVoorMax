import './App.css';
import { Navbar, Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home.js'
import Story from './pages/Story.js'
import General from './pages/General.js'
import Event from './pages/Event.js'
import Artist from './pages/Artist.js'
import Label from './pages/Label.js'
import Store from './pages/Store.js'
import Contact from './pages/Contact.js'

function App() {
  return (
    <div className="App">
      <Router>
      <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/story">Story</Nav.Link>
            <Nav.Link href="/general">General info</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
            <Nav.Link href="/artist">Artist</Nav.Link>
            <Nav.Link href="/label">Label</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/contact">Contact and related</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
      <Switch>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/general">
            <General />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/artist">
            <Artist />
          </Route>
          <Route path="/label">
            <Label />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
