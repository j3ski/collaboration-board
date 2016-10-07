<template>
  <div>
    <div class="filters">
      <h2>Search by:</h2>
      <div class="filter">
        <label for="userFilter">User:</label>
        <input type="text" id="userFilter" v-model="userFilter">
      </div>
      <div class="filter">
        <label for="contentFilter">Content:</label>
        <input type="text" id="contentFilter" v-model="contentFilter">
      </div>
    </div>
    <transition-group name="posts-list">
      <div v-for="post in filteredPosts" :key="post.id" class="post">
        <div class="post--head">
          <h1>{{post.title}}</h1>
          <button @click="remove(post)">Delete</button>
        </div>
        <small>by: {{post.user.name}}</small>
        <div class="post--body">
          <div>{{post.body}}</div>
          <router-link :to="{ name: 'comments', params: { postId: post.id} }">see comments</router-link>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  import store from '../store/store';

  export default {
    data () {
      return {
        posts: [],
        userFilter: '',
        contentFilter: ''
      }
    },
    methods: {
      remove: function(post) {
        this.posts = this.posts.filter(p => p !== post);
        store.removePost(post.id)
           .catch(() => this.posts.push(post));
      }
    },
    computed: {
      filteredPosts() {
        return this.posts
          .filter(post =>  post.user.name.toLowerCase().match(this.userFilter.toLowerCase()))
          .filter(post => {
            return post.body.toLowerCase().match(this.contentFilter.toLowerCase()) ||
            post.title.toLowerCase().match(this.contentFilter.toLowerCase());
          });
      }
    },
    beforeRouteEnter(to, from, next) {
      store.getPostsWithUsers()
        .then(posts => next(vm => vm.posts = posts));
    }
  }
</script>

<style scoped>
  .post {
    transition: all 0.5s;
    border: 1px solid gray;
    margin: 10px;
    padding: 10px;
  }
  .post--head {
    display: flex;
    justify-content: space-between;
    color: #4EBABA;
  }
  .post--body {
    padding-top: 5px;
  }
  .filters {
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .filter {
    padding: 0 10px;
  }
  .posts-list-enter, .posts-list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  .posts-list-leave-active {
    position: absolute;
    left: 0;
    right: 14px;
  }
</style>
