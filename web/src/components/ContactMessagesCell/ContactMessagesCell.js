export const QUERY = gql`
  query ContactMessagesQuery {
    contacts {
      id
      name
      email
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contacts }) => {
  return contacts.map((contact) => (
    <article key={contact.id}>
      <h2>{contact.name}</h2>
      <h3>{contact.email}</h3>
      <p>{contact.message}</p>
    </article>
  ))
}
