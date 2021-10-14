import { format } from 'date-fns'
import { createTransformerDirective } from '@redwoodjs/graphql-server'

export const schema = gql`
  """
  Use @publishedDateFormatter to transform the resolved value to return a modified result.
  """
  directive @publishedDateFormatter on FIELD_DEFINITION
`

// const transform = ({ context, resolvedValue }) => {
//   /**
//    * Write your transformation logic inside this function.
//    * Transformer directives run **after** resolving the value
//    *
//    * - You can also throw an error, if you want to stop executing, but note that the value has already been resolved
//    * - Transformer directives **must** be synchronous, and return a value
//    **/

//   // currentUser is only available when auth is setup.
//   logger.debug(
//     { currentUser: context.currentUser },
//     'currentUser in publishedDateFormatter directive'
//   )

//   // ... you can modify the resolvedValue and return it
//   logger.debug(
//     resolvedValue,
//     'resolvedValue in publishedDateFormatter directive'
//   )

//   // You can also modify your directive to take arguments
//   // and use the directiveArgs object provided to this function to get values
//   // See documentation here: https://redwoodjs.com/docs/directives

//   return resolvedValue.replace('foo', 'bar')
// }

const transform = ({ root }) => {
  const post = root
  const date = post.publishedAt || post.createdAt || Date.now()
  return `${format(date, 'h:mm aaa')} on ${format(date, 'do LLLL yyyy')}`
}

const publishedDateFormatter = createTransformerDirective(schema, transform)

export default publishedDateFormatter
