import React from 'react';

import {
  Switch,
  NavLink,
  Route,
} from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';
import { TabInterface } from './components/Interfaces/Interfaces';

import './App.css';

const tabs: TabInterface[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Home = () => <h2>Home</h2>;

const App: React.FC = () => (
  <div className="App">
    <nav>
      <ul className="list">
        <li>
          <NavLink
            activeClassName="nav__item active"
            className="nav__item"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="nav__item active"
            className="nav__item"
            to="/tabs"
          >
            Tabs
          </NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tabs" render={() => <Tabs tabs={tabs} />} />
    </Switch>
  </div>
);

export default App;
