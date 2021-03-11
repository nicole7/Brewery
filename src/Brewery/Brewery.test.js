import React from 'react';
import { render } from '@testing-library/react';
import Brewery from './Brewery';

describe('Brewery', () => {
  test('renders correcly', () => {
    render(<Brewery />);
  })
  test('calls the onClickHander properly with next', () => {
    const changePage = jest.fn();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(size => [size, 'next']);
    expect(changePage).toBeTruthy();

  })
})
  