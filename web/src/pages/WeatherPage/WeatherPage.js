import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { FieldError, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { useForm } from '@redwoodjs/forms'
import WeatherCell from 'src/components/WeatherCell'

const WeatherPage = () => {
  const [zip, setZip] = useState()
  const formMethods = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    setZip(data.zip)
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
                  <Submit className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150">
                    Go
                  </Submit>
                </span>
              </div>
            </Form>
          </div>
          {zip && <WeatherCell zip={zip} />}
        </div>
      </div>
    </>
  )
}

export default WeatherPage
