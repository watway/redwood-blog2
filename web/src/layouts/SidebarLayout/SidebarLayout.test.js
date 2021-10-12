import { render } from '@redwoodjs/testing/web'

import SidebarLayout from './SidebarLayout'

describe('SidebarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarLayout />)
    }).not.toThrow()
  })
})
