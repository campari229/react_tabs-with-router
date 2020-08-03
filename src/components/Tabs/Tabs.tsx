import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import { Tab } from '../Tab/Tab';
import { TabInterface, Match } from '../Interfaces/Interfaces';

import './Tabs.css';

type Props = {
  tabs: TabInterface[];
  match: Match;
};

export const Tabs: React.FC<Props> = ({ match, tabs }) => (
  <>
    <h2>Tabs</h2>
    <div className="tabs-wrapper">
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
      <div className="info-wrapper">
        <p className="info">
          {tabs.find(tab => tab.id === match.params.tabsId)?.content}
        </p>
      </div>
    </div>
  </>
);
