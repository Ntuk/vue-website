<template>
  <div>
    <hero
      :title="projectHero.title"
      :subtitle="projectHero.subtitle"
      :image="projectHero.image"
      :promoLink="projectHero.product && projectHero.product.productLink"
    />
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Projects</h1>
        <div class="columns is-multiline">
          <div 
            v-for="project in projects" 
            :key="project._id" 
            class="column is-one-quarter"
          >
            <v-popover
              offset="16"
              trigger="hover"
              placement="right-start">
              <project-card :project="project"/>
              <template slot="popover">
                <project-card-tooltip
                  :title="project.title"
                  :subtitle="project.category.name"
                  :description="project.subtitle"
                  :wsl="project.wsl"
                />
              </template>
            </v-popover>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns is-multiline">
          <div v-for="blog in featuredBlogs" :key="blog._id" class="column is-one-quarter">
            <blog-card
              :key="blog._id"
              :blog="blog"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
import ProjectCardTooltip from '~/components/ProjectCardTooltip'
import BlogCard from '~/components/BlogCard'
import Hero from '~/components/shared/Hero'
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Portfolio and Blog | Nico Tukiainen'
  },
  components: {
    ProjectCard, BlogCard, Hero, ProjectCardTooltip
  },
  computed: {
    ...mapState({
      projects: state => state.project.items,
      featuredBlogs: state => state.blog.items.featured,
      projectHero: state => state.hero.item || {}
    })
  },
  async fetch({store}) {
    await store.dispatch('project/fetchProjects')
    await store.dispatch('blog/fetchFeaturedBlogs', {'filter[featured]': true})
  }
}
</script>

<style scoped lang="scss">
  // Home page
  .links {
    padding-top: 15px;
  }
</style>
