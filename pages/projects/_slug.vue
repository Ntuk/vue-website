<template>
  <div>
    <product-hero
      :title="project.title"
      :subtitle="project.subtitle"
      :author="project.author">
      <product-hero-card
        :navigateTo="project.productLink"
        :requirements="project.requirements"
        :image="project.image" 
      />
    </product-hero>
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <div class="section">
            <div class="what-you-get">
              <div class="what-you-get-title">
                Technologies used
              </div>
              <ul class="what-you-get-items">
                <li
                   v-for="wsl in project.wsl"
                   :key="wsl.value"
                   class="what-you-get-item">
                  <span>{{wsl.value}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="section project-description p-t-none">
            <div class="project-description-title">Project Info</div>
            <div class="project-description-details">
              <div v-html="project.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductHero from '~/components/ProductHero'
import ProductHeroCard from '~/components/ProductHeroCard'
export default {
  head() {
    return {
      title: this.project.title,
      meta: [
        { hid: 'description', name: 'description', content: this.project.subtitle }
      ]
    }
  },
  components: {
    ProductHero, ProductHeroCard
  },
  computed: {
    project() {
      return this.$store.state.project.item
    }
  },
  async fetch({store, params}) {
    await store.dispatch('project/fetchProjectBySlug', params.slug)
  }
}
</script>

<style lang="scss">
  .what-you-get {
    background-color: #f9f9f9;
    border: 1px solid #dedfe0;
    padding: 10px 15px;
    &-title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-items {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 17px;
      width: 45%;
    }
  }
  .project-description {
    &-title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-details {
      font-size: 18px;
      ul {
        list-style: disc;
        margin-left: 20px;
      }
      ol {
        margin-left: 20px;
      }
      strong {
        font-size: 20px;
      }
      p {
        min-height: 30px;
      }
    }
  }
</style>