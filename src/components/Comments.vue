<template>
  <div>
    <div>
      <h1>{{post.title}}</h1>
      <div>{{post.body}}</div>
      <router-link to="/posts">Back to posts</router-link>
    </div>
    <section>
      <div v-for="comment in post.comments">
        <h1>{{comment.name}}</h1>
        <small>{{comment.email}}</small>
        <div>{{comment.body}}</div>
      </div>
    </section>
  </div>
</template>

<script>
  import store from '../store/store';

  export default {
    data () {
      return {
        post: {}
      }
    },
    beforeRouteEnter(to, from, next) {
      store.getPostWithComments(to.params.postId)
        .then(post => next(vm => vm.post = post));
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
