import { render } from '@testing-library/react';
import SocialNetworkApp from './App';

test('renders without crashing', () => {
  render(<SocialNetworkApp />);
});
