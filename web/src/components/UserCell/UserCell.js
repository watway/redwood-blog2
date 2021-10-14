import User from 'src/components/User'

export const QUERY = gql`
  query UserQuery($id: String!) {
    user(id: $id) {
      id
      email
      user_metadata {
        full_name
      }
      app_metadata {
        roles
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user }) => {
  return <User key={user.id} user={user} />
}
