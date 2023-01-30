import { render, screen } from '@testing-library/react';
import App from './App';

// Allows us to create unit test for are units/components
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
