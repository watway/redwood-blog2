export const schema = gql`
  type UserProfile {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    uuid: String!
    userRoles: [UserRole]!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
  }

  input CreateUserProfileInput {
    uuid: String!
  }

  input UpdateUserProfileInput {
    uuid: String
  }
`
