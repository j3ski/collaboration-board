<template>
  <div>
    <div>
      <h1>{{post.title}}</h1>
      <div>{{post.body}}</div>
    </div>
    <section>
      <div v-for="comment in comments">
        {{comment.body}}
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
      store.getPostWithComments(to.postId)
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
