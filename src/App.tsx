import React from 'react';
import styled from 'styled-components';

export const App = () => {
  return (
    <div>
      <Header>Hello world</Header>
    </div>
  );
};

const Header = styled.div`
  font-size: 20px;
  color: darkcyan;
`;
