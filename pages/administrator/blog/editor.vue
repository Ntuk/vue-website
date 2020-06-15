<template>
  <div>
    <Header
      title="Write your Blogs"
      exitLink="/administrator/blogs"
    />
    <div class="blog-editor-container">
      <div class="container">
        <editor @editorUpdated="saveBlog"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/shared/Header'
import Editor from '~/components/editor'
export default {
  layout: 'administrator',
  components: {
    Header, Editor
  },
  methods: {
    saveBlog(blogData) {
      this.$store.dispatch('administrator/blog/createBlog', blogData)
        .then(blog => this.$router.push(`/administrator/blog/${blog._id}/edit`))
    }
  }
}
</script>
<style lang="scss">


</style>
