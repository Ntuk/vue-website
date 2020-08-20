<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">all projects - click a card for more info</h1>
        <div class="rows is-multiline">
          <div
            v-for="project in projects"
            :key="project._id"
            class="row is-one-quarter">
            <project-card :project="project"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
import ProjectCardTooltip from '~/components/ProjectCardTooltip'
import Footer from '~/components/shared/Footer'
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Projects | Nico Tukiainen'
  },
  components: {
    ProjectCard, ProjectCardTooltip, Footer
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
.container {
  padding-top: 14rem;
}
.title {
color: #f39c12;
font-family: 'Shadows Into Light', cursive;
font-size: 30px;
letter-spacing: 2px;
font-weight: bold;
text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
  .links {
    padding-top: 15px;
  }
</style>

