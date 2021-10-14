import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { FieldError, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { useForm } from '@redwoodjs/forms'

const WeatherPage = () => {
  const [weather, setWeather] = useState()
  const [loading, setLoading] = useState(false)
  const formMethods = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    setLoading(true)
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${data.zip}&appid=${process.env.OPENWEATHER_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json)
        setLoading(false)
      })
  }

  const temp = () => Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32)

  const condition = () => weather.weather[0].main

  const icon = () => {
    return `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  }

  return (
    <>
      <MetaTags title="Weather" />

      <div>
        <div className="max-w-7xl mx-auto mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-gray-100">
            Weather
          </h1>
        </div>
        {/* <UsersCell /> */}

        <div className="bg-white overflow-hidden shadow rounded-lg mt-8">
          <div className="px-4 py-5 sm:p-6">
            <Form
              onSubmit={onSubmit}
              config={{ mode: 'onBlur' }}
              formMethods={formMethods}
            >
              <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Label
                    name="zip"
                    className="block text-sm font-medium leading-5 text-gray-700"
                    errorClassName="text-orange-600"
                  >
                    Zip Code
                  </Label>
                  <TextField
                    name="zip"
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    maxLength="5"
                    validation={{ required: true, pattern: /^\d{5}$/ }}
                    errorClassName="bg-orange-100 rounded-md w-full"
                  />
                </div>

                <FieldError
                  name="zip"
                  className="block w-full text-orange-600 text-xs pt-2"
                />
              </div>

              <div className="mt-8">
                <span className="inline-flex rounded-md shadow-sm">
                  <Submit
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
                    disabled={loading}
                  >
                    Go
                  </Submit>
                </span>
              </div>
            </Form>
          </div>

          {weather && (
            <section className="px-4 py-5 sm:p-6 border-t border-gray-200">
              <h1>{weather.name}</h1>
              <h2>
                <img src={icon()} style={{ maxWidth: '2rem' }} />
                <span>
                  {temp()}°F and {condition()}
                </span>
              </h2>
            </section>
          )}
        </div>
      </div>
    </>
  )
}

export default WeatherPage
