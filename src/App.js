import NavBar from './components/Navbar.js';
import { Switch, Route ,Redirect} from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar />

      <Route>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to ="/" />
        </Switch>
      </Route>
    </>
  );
}

export default App;
