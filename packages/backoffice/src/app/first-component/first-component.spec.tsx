import { render } from '@testing-library/react';

import FirstComponent from './first-component';

describe('FirstComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstComponent />);
    expect(baseElement).toBeTruthy();
  });
});
