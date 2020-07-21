import React from 'react';

import './Tab.css';

type Props = {
  title: string;
  index: number;
};

export const Tab: React.FC<Props> = ({ title, index }) => (
  <button
    key={index}
    type="button"
    className="tab"
  >
    {title}
  </button>
);
