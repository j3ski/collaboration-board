const baseUrl = 'https://jsonplaceholder.typicode.com/';

////////// Private methods
function _getPosts(postId) {
  return postId ?
    _fetchJSON(`posts/${postId}`) :
    _fetchJSON(`posts`);
}

function _getUsers() {
  return _fetchJSON(`users`);
}

function _getComments(postId) {
  return _fetchJSON(`posts/${postId}/comments`);
}

function _fetchJSON(url, options = {}) {
  return fetch(`${baseUrl}${url}`, options)
    .then(r => r.json());
}

////////// Public methods
/**
 * Get posts with associated users
 * @returns {Promise}
 */
function getPostsWithUsers() {
  return Promise.all([_getPosts(), _getUsers()])
    .then(([posts, users]) => {
      return posts
        .map(post => {
          post.user = users.find(user => user.id === post.userId);
          return post;
        });
    });
}

/**
 * Get post with comments
 * @param {Number} postId - id of the post to be fetched
 * @returns {Promise}
 */
function getPostWithComments(postId) {
  return Promise.all([_getPosts(postId), _getComments(postId)])
    .then(([post, comments]) => {
      post.comments = comments;
      return post;
    });
}

/**
 * Remove a post with the given id
 * @param {Number} postId
 * @returns {Promise}
 */
function removePost(postId) {
  return _fetchJSON(`posts/${postId}`, {method: 'DELETE'});
}

export default {
  getPostsWithUsers,
  getPostWithComments,
  removePost
}
