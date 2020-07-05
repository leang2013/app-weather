import React from 'react';
import { render } from '@testing-library/react';
import DetailCard from '../../components/detailCard';

describe('Component DetailCard', () => {
  it('should render the component', () => {
    const mockName = 'London';
    const mockData = {
      feels_like: 10,
      humidity: 10,
      pressure: 10,
      temp: 10,
      temp_max: 10,
      temp_min: 10,
    };

    const { getByText } = render(<DetailCard name={mockName} data={mockData} />);
    const linkElement = getByText(/London/i);
    expect(linkElement).toBeInTheDocument();
  });
});
