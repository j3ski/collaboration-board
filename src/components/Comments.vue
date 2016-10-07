<template>
  <div class="comments">
    <div class="post">
      <h1>{{post.title}}</h1>
      <div>{{post.body}}</div>
      <router-link to="/posts">Back to posts</router-link>
    </div>
    <section>
      <h2>Comments</h2>
      <div v-for="comment in post.comments" class="comment">
        <div class="comment--head">
          <h3>{{comment.name}}</h3>
          <small>{{comment.email}}</small>
        </div>
        <div class="comment--body">{{comment.body}}</div>
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

<style scoped>
  .post h1 { color: #4EBABA;}
  .comments {
    padding: 10px;
  }
  section {
    padding: 20px 0;
  }

  .comment {
    padding: 10px 0;
  }

  .comment--head {
    display: flex;
    align-items: center;
  }

  .comment--head h3 {
    padding-right: 10px;
    color: #1DBB1D;
  }
</style>
