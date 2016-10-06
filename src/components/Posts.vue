<template>
  <div>
    <div class="filters">
      <label for="userFilter">User:</label>
      <input type="text" id="userFilter" v-model="userFilter">
      <label for="contentFilter">Content:</label>
      <input type="text" id="contentFilter" v-model="contentFilter">
    </div>
    <transition-group name="posts-list">
      <div v-for="post in filteredPosts" :key="post.id" class="posts-list-item">
        <h1>{{post.title}}</h1> <small>by: {{post.user.name}}</small>
        <div>{{post.body}}</div>
        <router-link :to="{ name: 'comments', params: { postId: post.id} }">see comments</router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }

  .posts-list-item {
    transition: all 0.5s;
  }
  .posts-list-enter, .posts-list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  .posts-list-leave-active {
    position: absolute;
  }
</style>
