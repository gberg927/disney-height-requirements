import React from 'react';
import { render } from '@testing-library/react';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';

import Header from '../header';

describe(`Header`, () => {
  it(`renders siteTitle`, () => {
    const siteTitle = `Hello World`;
    expect.extend({ toBeInTheDocument, toHaveClass });
    const { getByText } = render(<Header siteTitle={siteTitle} parks={[]} />);

    const title = getByText(siteTitle);

    expect(title).toBeInTheDocument();
  });
});
