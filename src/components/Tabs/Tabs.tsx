import React from 'react';
import {
  BrowserRouter,
  Switch,
  NavLink,
  Route,
} from 'react-router-dom';

import { Tab } from '../Tab/Tab';
import { TabInterface } from '../Interfaces/Interfaces';
import { TabInfo } from '../TabInfo/TabInfo';

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
                <NavLink activeClassName="" to={`/tabs/${tab.id}`}>
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
          <Route path="/tabs/:tab?" render={({ match }) => <TabInfo tabs={tabs} match={match} />} />
        </Switch>
      </BrowserRouter>
    </div>
  </>
);
