import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

describe('Component App', () => {

  it('should render the component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/My Weather/i);
    expect(linkElement).toBeInTheDocument();
  });
});