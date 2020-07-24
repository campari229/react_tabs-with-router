import React from 'react';
import {
  BrowserRouter,
  Switch,
  NavLink,
  Route,
} from 'react-router-dom';

import { Tab } from '../Tab/Tab';
import { TabInterface } from '../Interfaces/Interfaces';

import './Tabs.css';

type Props = {
  tabs: TabInterface[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => (
  <>
    <h2>Tabs</h2>
    <div className="tabs-wrapper">
      <BrowserRouter>
        <ul className="tabs-list">
          {
            tabs.map((tab, index) => (
              <li key={tab.title}>
                <NavLink to={`/tabs/${tab.id}`}>
                  <Tab
                    title={tab.title}
                    index={index}
                  />
                </NavLink>
              </li>
            ))
          }
        </ul>
        <Switch>
          <Route
            path="/tabs/:tab?"
            render={({ match }) => (
              <div className="info-wrapper">
                <p className="info">
                  {tabs.find(tab => tab.id === match.params.tab)?.content}
                </p>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  </>
);
