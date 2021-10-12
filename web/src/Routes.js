// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'
import SidebarLayout from 'src/layouts/SidebarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SidebarLayout}>
        <Set wrap={BlogLayout}>
          <Route path="/" page={HomePage} name="home" prerender />
        </Set>
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/messages" page={MessagesPage} name="messages" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/weather" page={WeatherPage} name="weather" />

        <Private unauthenticated="home">
          <Route path="/settings" page={SettingsPage} name="settings" whileLoadingPage={<>Your settings await ....</>} prerender />
        </Private>

        <Private unauthenticated="home" role="admin">
          <Route path="/admin/users" page={UsersPage} name="users" whileLoadingPage={<>Fetching...</>} prerender />
        </Private>

        <Set wrap={PostsLayout}>
          <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />

          <Private unauthenticated="home" role={['admin', 'author', 'publisher']} prerender whileLoadingPage={<>Fetching...</>}>
            <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          </Private>

          <Private unauthenticated="home" role={['admin', 'editor', 'publisher']} prerender whileLoadingPage={<>Fetching...</>}>
            <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          </Private>

          <Private unauthenticated="home" role={['admin', 'author', 'editor', 'publisher']} prerender whileLoadingPage={<>Fetching...</>}>
            <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
            <Route path="/admin/posts" page={PostPostsPage} name="posts" />
          </Private>
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
