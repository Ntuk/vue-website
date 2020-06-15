<template>
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Projects</h1>
        <div class="columns">
          <div 
            v-for="project in projects" 
            :key="project._id" 
            class="column is-one-quarter"
          >
            <project-card :project="project"/>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <blog-card />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
import BlogCard from '~/components/BlogCard'
import Hero from '~/components/shared/Hero'
import { mapState } from 'vuex'
export default {
  components: {
    ProjectCard, BlogCard, Hero
  },
  computed: {
    ...mapState({
      projects: state => state.project.items
    })
  },
  async fetch({store}) {
    await store.dispatch('project/fetchProjects')
  }
}
</script>

<style scoped lang="scss">
  // Home page
  .links {
    padding-top: 15px;
  }
</style>
