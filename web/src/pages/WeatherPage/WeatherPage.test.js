import { render } from '@redwoodjs/testing/web'

import WeatherPage from './WeatherPage'

describe('WeatherPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherPage />)
    }).not.toThrow()
  })
})
