<template>
  <div class="manage-page">
    <Header
      title="Some very nice project name"
      exitLink="/administrator/projects">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <button
            @click="() => {}"
            class="button is-primary is-inverted is-medium is-outlined">
            Save
          </button>
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
                  <!-- display TargetStudents -->
                  <a @click.prevent="navigateTo(1)"
                     :class="activeComponentClass(1)">Project Info
                  </a>
                </li>
                <li>
                  <!-- display LandingPage -->
                  <a @click.prevent="navigateTo(2)"
                     :class="activeComponentClass(2)">
                    Project Landing Page
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
    Status
  },
  mixins: [MultiComponentMixin],
  data() {
    return {
      steps: ['ProjectInfo', 'LandingPage', 'Status']
    }
  },
  fetch({store, params}) {
    return store.dispatch('administrator/project/fetchProjectById', params.id)
  },
  computed: {
    ...mapState({
      project: ({administrator}) => administrator.project.item
    })
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