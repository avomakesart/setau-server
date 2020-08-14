const controller = require('../controllers/blog/post.controller')
const commentController = require('../controllers/blog/post-comment.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  // Blog Post
  app.post('/api/blog_post', controller.createPost)
  app.get('/api/blog_post', controller.getPosts)
  // Get blog post by id
  app.get('/api/blog_post/:id', controller.getPostById)
  app.put('/api/blog_post/:id', controller.updatePost)
  app.delete('/api/blog_post/:id', controller.deletePost)

  // Comments
  app.post('/api/blog_post/:id/comments', commentController.createPostComment)
  // Get all comments
  app.get('/api/blog_post/comments/:id', commentController.getPostComments)
  // Get a comment by id
  app.get(
    '/api/blog_post/:id/comments/:id',
    commentController.getPostCommentById
  )
  // Delete a project
  app.delete(
    '/api/blog_post/:id/comments/:id',
    commentController.deletePostComment
  )
}
