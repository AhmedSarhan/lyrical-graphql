import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleSong from './pages/SingleSong';
import HomeBtn from './components/Navigation/HomeBtn';
function App() {
  return (
    <div className="App container" style={{ position: 'relative' }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/song/:id">
            <SingleSong />
          </Route>
        </Switch>
        <HomeBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;
