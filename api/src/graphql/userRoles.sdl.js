export const schema = gql`
  type UserRole {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    userProfileId: Int
    userProfile: UserProfile
  }

  type Query {
    userRoles: [UserRole!]! @requireAuth
  }

  input CreateUserRoleInput {
    name: String!
    userProfileId: Int
  }

  input UpdateUserRoleInput {
    name: String
    userProfileId: Int
  }
`
