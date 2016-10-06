const baseUrl = 'https://jsonplaceholder.typicode.com';

function _getPosts(postId) {
  return postId ?
    _fetchJSON(`${baseUrl}/posts/${postId}`) :
    _fetchJSON(`${baseUrl}/posts`);
}

function _getUsers() {
  return _fetchJSON(`${baseUrl}/users`);
}

function _getComments(postId) {
  return _fetchJSON(`${baseUrl}/posts/${postId}/comments`);
}

function _fetchJSON(url) {
  return fetch(url)
    .then(r => r.json());
}

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

function getPostWithComments(postId) {
  return Promise.all([_getPosts(postId), _getComments(postId)])
    .then(([post, comments]) => {
      post.comments = comments;
      return post;
    });
}

export default {
  getPostsWithUsers,
  getPostWithComments
}
