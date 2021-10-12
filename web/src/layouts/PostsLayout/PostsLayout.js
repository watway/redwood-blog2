import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const PostsLayout = ({ children }) => {
  const { hasRole } = useAuth()

  return (
    <>
      <MetaTags title="Manage Posts" />
      <Toaster />

      <div className="rw-scaffold">
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.posts()} className="rw-link">
              Posts
            </Link>
          </h1>
          {(hasRole('admin') || hasRole('author')) && (
            <Link to={routes.newPost()} className="rw-button rw-button-green">
              <div className="rw-button-icon">+</div> New Post
            </Link>
          )}
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </>
  )
}

export default PostsLayout
