import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const posts = () => {
  logger.trace('Fetching posts...')

  return db.post.findMany({ orderBy: { title: 'asc' } })
}

export const post = ({ id }) => {
  logger.trace('Fetching post...')

  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }) => {
  requireAuth()

  return db.post.create({
    data: {
      ...input,
      authorId: context.currentUser?.sub,
      publisherId: context.currentUser?.sub,
    },
  })
}

export const updatePost = ({ id, input }) => {
  requireAuth()

  return db.post.update({
    data: {
      ...input,
      editorId: context.currentUser?.sub,
      publisherId: context.currentUser?.sub,
      updatedAt: new Date(),
    },
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  requireAuth()

  return db.post.delete({
    where: { id },
  })
}
