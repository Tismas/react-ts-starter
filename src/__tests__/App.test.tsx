import React from 'react';
import { render } from '@testing-library/react';

import { App } from '../App';

test('should render correctly', async () => {
  const { getByText } = render(<App />);
  getByText('React TS starter');
});
