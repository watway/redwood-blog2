export const schema = gql`
  type Weather {
    zip: String!
    city: String!
    country: String!
    conditions: String!
    temp: Int!
    icon: String!
  }

  input Location {
    zip: String!
    country: String!
  }

  type Query {
    getWeather(location: Location!): Weather! @skipAuth
  }
`
