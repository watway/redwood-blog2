import { render } from '@redwoodjs/testing/web'

import User from './User'

describe('User', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<User />)
    }).not.toThrow()
  })
})
