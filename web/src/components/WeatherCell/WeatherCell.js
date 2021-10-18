export const QUERY = gql`
  query FindWeatherQuery($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div className="text-orange-600">Error: {error.message}</div>
)

export const Success = ({ weather }) => {
  return (
    <section className="px-4 py-5 sm:p-6 border-t border-gray-200">
      <h1>{weather.city}</h1>
      <h2>
        <img src={weather.icon} style={{ maxWidth: '2rem' }} />
        <span>
          {weather.temp}°F and {weather.conditions}
        </span>
      </h2>
    </section>
  )
}
