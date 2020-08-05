<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">All Projects</h1>
        <div class="columns is-multiline">
          <div
            v-for="project in projects"
            :key="project._id"
            class="column is-one-quarter">
            <!-- pass a project as a prop to project-card -->
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
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
import ProjectCardTooltip from '~/components/ProjectCardTooltip'
import { mapState } from 'vuex'
export default {
  head: {
    title: 'AFPS Finland'
  },
  components: {
    ProjectCard, ProjectCardTooltip
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
  .section {
    margin-bottom: 100px;
  }
  .links {
    padding-top: 15px;
  }
</style>

