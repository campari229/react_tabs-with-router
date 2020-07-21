import React from 'react';

import { TabInterface } from '../Interfaces/Interfaces';

type Params = {
  tab: string;
};

type Match = {
  params: Params;
};

type Props = {
  tabs: TabInterface[];
  match: Match;
};

export const TabInfo: React.FC<Props> = ({ tabs, match }) => {
  const id = match.params.tab;

  return (
    <div className="info-wrapper">
      <p className="info">
        {tabs.find(tab => tab.id === id)?.content}
      </p>
    </div>
  );
};
