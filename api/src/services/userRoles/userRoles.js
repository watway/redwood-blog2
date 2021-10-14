import { db } from 'src/lib/db'

export const userRoles = () => {
  return db.userRole.findMany()
}

// export const userRole = ({ id }) => {
//   return db.userRole.findUnique({
//     where: { id },
//   })
// }

// export const UserRole = {
//   userProfile: (_obj, { root }) =>
//     db.userRole.findUnique({ where: { id: root.id } }).userProfile(),
// }
