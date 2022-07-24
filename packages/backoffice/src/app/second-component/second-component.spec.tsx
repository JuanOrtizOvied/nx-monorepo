import { render } from '@testing-library/react';

import SecondComponent from './second-component';

describe('SecondComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecondComponent />);
    expect(baseElement).toBeTruthy();
  });
});
