import got from 'got'
import { UserInputError } from '@redwoodjs/graphql-server'

export const getWeather = async ({ location }) => {
  try {
    const { body } = await got(
      `http://api.openweathermap.org/data/2.5/weather?zip=${location.zip},${location.country}&appid=${process.env.OPENWEATHER_KEY}`,
      {
        responseType: 'json',
      }
    )

    return {
      zip: location.zip,
      city: body.name,
      country: location.country,
      conditions: body.weather[0].main,
      temp: Math.round(((body.main.temp - 273.15) * 9) / 5 + 32),
      icon: `http://openweathermap.org/img/wn/${body.weather[0].icon}@2x.png`,
    }
  } catch (err) {
    // if (response.responseCode === '404') {
    throw new UserInputError(
      `${location.zip} isn't a valid ${location.country} zip code, please try again.`
    )
    // }
  }
}
