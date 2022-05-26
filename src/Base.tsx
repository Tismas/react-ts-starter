import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Base: React.FC = () => {
  return (
    <>
      <Header>React TS starter</Header>
      <div>
        <Link to="/foo">Go to foo</Link> | <Link to="/404-not-found">Go to 404</Link>
      </div>
      <Outlet />
    </>
  );
};

const Header = styled.div`
  font-size: 20px;
  color: darkcyan;
`;
