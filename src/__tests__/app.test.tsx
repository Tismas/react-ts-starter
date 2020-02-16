import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../App';

test('allows the user to login successfully', async () => {
  const { getByText } = render(<App />);
  getByText('Hello world');
});
