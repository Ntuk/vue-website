<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <nuxt-link :to="`/blogs/${blog.slug}`">
            <p class="title is-4">{{blog.title}}</p>
          </nuxt-link>
          <p class="subtitle is-6"><i>by {{blog.author.name}}</i></p>
        </div>
      </div>
      <div class="content">
        {{blog.subtitle}}
        <br>
      </div>
      <div class="content">
        {{blog.createdAt | formatDate}}
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="`/blogs/${blog.slug}`" class="card-footer-item link">Read the whole post</nuxt-link>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    blog: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-image:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .link {
    color: #e67e22;
  }
</style>
