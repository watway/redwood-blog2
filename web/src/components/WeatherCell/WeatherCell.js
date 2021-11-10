export const QUERY = gql`
  query FindWeatherQuery($location: Location!) {
    weather: getWeather(location: $location) {
      zip
      city
      country
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div className="px-4 py-5 sm:p-6 border-t border-gray-200 text-orange-600">
    {error.message}
  </div>
)

export const Success = ({ weather }) => {
  return (
    <section className="px-4 py-5 sm:p-6 border-t border-gray-200">
      <h1>
        {weather.city}, {weather.country}
      </h1>
      <h2>
        <img src={weather.icon} style={{ maxWidth: '2rem' }} alt="Weather" />
        <span>
          {weather.temp}°F and {weather.conditions}
        </span>
      </h2>
    </section>
  )
}
