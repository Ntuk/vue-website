<template>
  <div>
    <Hero
      :title="projectHero.title"
      :subtitle="projectHero.subtitle"
      :image="projectHero.image"
      :promoLink="projectHero.product && projectHero.product.productLink"
    />
    <section class="section" id="contents-of-index">
      <div class="container">
        <div class="is-flexible">
          <h1 class="title">Featured Projects</h1>
          <button @click="$router.push(`/projects/`)" class="button">See all projects</button>
        </div>
        <div class="columns is-multiline">
          <div            
            v-for="project in projects.slice(0, 4)"
            :key="project._id" 
            class="column is-one-quarter"
          >
            <v-popover
              offset="0"
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
        <div class="is-flexible">
          <h1 class="title">Featured ramblings</h1> 
          <button @click="$router.push(`/blogs/`)" class="button">See all ramblings</button>
        </div>
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
    <Footer/>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
import ProjectCardTooltip from '~/components/ProjectCardTooltip'
import BlogCard from '~/components/BlogCard'
import Hero from '~/components/shared/Hero'
import Footer from '~/components/shared/Footer'
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Nico Tukiainen'
  },
  components: {
    ProjectCard, BlogCard, Hero, ProjectCardTooltip, Footer
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
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .section {
    margin-bottom: 100px;
  }
  .is-flexible {
    display: inline-flex;
    flex-wrap: nowrap;
    width: 100%;

    button {
      color: #e67e22;
      background-color: #ecf0f1;
      border: 1px solid #dbdbdb;
      margin-left: 16px;

      &:hover {
        background-color: #f4f5f5;
        border: 1px solid #e67e22;
      }
    }
  }
  .links {
    padding-top: 15px;
  }
  .link {
    color: #e67e22;
  }
</style>
