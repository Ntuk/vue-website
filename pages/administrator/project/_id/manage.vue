<template>
  <div class="manage-page">
    <Header
      title="Some very nice project name"
      exitLink="/administrator/projects">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <button
            @click="updateProject"
            :disabled="!canUpdateProject"
            class="button is-primary is-inverted is-medium is-outlined">
            Save
          </button>
        </div>
        <div class="full-page-takeover-header-button">
          <Modal
            openTitle="Favorite"
            openBtnClass="button is-primary is-inverted is-medium is-outlined"
            title="Make Project Hero"
            @opened="applyProjectValues"
            @submitted="createProjectHero">
            <div>
              <form>
                <div class="field">
                  <label class="label">Hero title</label>
                  <span class="label-info">Suggested 64 Characters</span>
                  <div class="control">
                    <input
                      v-model="projectHero.title"
                      class="input is-medium"
                      type="text"
                      placeholder="Amazing project discount">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Hero subtitle</label>
                  <span class="label-info">Suggested 128 Characters</span>
                  <input
                    v-model="projectHero.subtitle"
                    class="input is-medium"
                    type="text"
                    placeholder="Subtitle">
                </div>
                <div class="field">
                  <label class="label">Hero image</label>
                  <span class="label-info">Image in format 3 by 1 (720 x 240)</span>
                  <input
                    v-model="projectHero.image"
                    class="input is-medium"
                    type="text"
                    placeholder="Some image in format 3 by 1 (720 x 240)">
                  <figure class="image is-3by1">
                    <img :src="projectHero.image">
                  </figure>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </template>
    </Header>
    <div class="project-manage">
      <div class="container">
        <div class="columns">
          <div class="column is-3 p-lg">
            <!-- <aside class="menu is-hidden-mobile"> -->
            <aside class="menu">
              <p class="menu-label">
                Project Editing
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display ProjectInfo -->
                  <a @click.prevent="navigateTo(1)"
                     :class="activeComponentClass(1)">
                     Tech stack
                  </a>
                </li>
                <li>
                  <!-- display LandingPage -->
                  <a @click.prevent="navigateTo(2)"
                     :class="activeComponentClass(2)">
                    Major Info 
                  </a>
                </li>
              </ul>
              <p class="menu-label">
                Project Managment
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display Status -->
                  <a @click.prevent="navigateTo(3)"
                     :class="activeComponentClass(3)">
                    Status
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <keep-alive>
              <component
                @projectValueUpdated="handleProjectUpdate"
                :is="activeComponent"
                :project="project"
              />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '~/components/shared/Modal'
import Header from '~/components/shared/Header'
import ProjectInfo from '~/components/administrator/ProjectInfo'
import LandingPage from '~/components/administrator/LandingPage'
import Status from '~/components/administrator/Status'
import MultiComponentMixin from '~/mixins/MultiComponentMixin'
import { mapState } from 'vuex'
export default {
  layout: 'administrator',
  components: { 
    Header, 
    ProjectInfo, 
    LandingPage, 
    Status,
    Modal
  },
  mixins: [MultiComponentMixin],
  data() {
    return {
      steps: ['ProjectInfo', 'LandingPage', 'Status'],
      projectHero: {}
    }
  },
  async fetch({store, params}) {
    await store.dispatch('administrator/project/fetchProjectById', params.id)
    await store.dispatch('category/fetchCategories')
  },
  computed: {
    ...mapState({
      project: ({administrator}) => administrator.project.item,
      canUpdateProject: ({administrator}) => administrator.project.canUpdateProject
    })
  },
  methods: {
    updateProject() {
      this.$store.dispatch('administrator/project/updateProject')
        .then(_ => this.$toasted.success('Project has been succesfully updated!', {duration: 3000}))
        .catch(error => this.$toasted.error('Project cannot be updated!'), {duration: 3000})
    },
    createProjectHero({closeModal}) {
      const heroData = {...this.projectHero}
      heroData.product = {...this.project}
      this.$store.dispatch('hero/createHero', heroData)
        .then(() => {
          closeModal()
          this.$toasted.success('Project Hero was created!', {duration: 3000})
        })
    },
    handleProjectUpdate({value, field}) {
      this.$store.dispatch('administrator/project/updateProjectValue', {field, value})
    },
    applyProjectValues() {
      // !this.projectHero.title && this.$set(this.projectHero, 'title', this.project.title)
      // !this.projectHero.subtitle && this.$set(this.projectHero, 'subtitle', this.project.subtitle)
      this.$set(this.projectHero, 'title', this.project.title)
      this.$set(this.projectHero, 'subtitle', this.project.subtitle)
      this.$set(this.projectHero, 'image', this.project.image)
    }
  }
}
</script>

<style lang="scss">
  .manage-page {
    .label-info {
      font-size: 13px;
      color: gray;
      font-style: italic;
    }
    .project-manage {
      padding-top: 40px;
      .menu {
        padding-top: 30px;
        &-label {
          font-size: 20px;
          color: black;
        }
        &-list {
          >li {
            font-size: 18px;
            margin-top: 10px;
            > a {
              &.is-active {
                border-left: 3px solid #58229f;
                background-color: transparent;
                color: inherit;
              }
            }
          }
        }
      }
      .card {
        &-section {
          padding: 40px;
        }
        &-header {
          &-title {
            padding: 0;
            color: #8F99A3;
            font-weight: 400;
            font-size: 25px;
          }
        }
      }
    }
  }
</style>