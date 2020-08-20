<template>
  <div style="padding-top:8rem;">
    <product-hero
      :title="project.title"
      :subtitle="project.subtitle"
      :author="project.author"
    >
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
          </div>
          <div class="section project-description p-t-none">
            <div class="wrapper" style="padding-top:0;">
              <div class="card">
              <div class="title enclosed">
                Tech stack
              </div>
              <ul class="subtitle">
                <li
                   v-for="wsl in project.wsl"
                   :key="wsl.value"
                   class="what-you-get-item">
                  <span>{{wsl.value}}</span>
                </li>
              </ul>
                <div class="title enclosed" style="margin-top:1rem;">Project Info</div>
                <div class="project-description-details">
                  <div v-html="project.description"></div>
                </div>
              </div>
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
.wrapper {
  flex: 1;
  padding-top: 14rem;
  position: relative;
  max-width: 1000px;
  margin: 0 auto 5rem auto;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;

  hr {
    background-color: transparent;
  }

  //tablets, big phones
  @media only screen and (min-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  // xs-devices, phones
  @media only screen and (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.title {
  color: #f39c12;
  font-family: 'Shadows Into Light', cursive;
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
.subtitle {
  color: #000;
  font-family: 'Shadows Into Light', cursive;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: bold;
}
.card {
  padding: 2rem;
  border-radius: 5px;
  grid-area: 1 / 1;
  // transform: translateX(10px) rotateY(25deg) rotateX(10deg);
  transform: translateX(-60px) rotateY(-10deg) rotateX(5deg) scale(1.03);
  background: rgba(243, 156, 18, 0.88);
  padding: 30px;
  color: #000;
  backface-visibility: hidden;
  box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);

  a {
    color: #12e4f3;
    font-family: 'Shadows Into Light', cursive;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  }
}
.card .enclosed {
  background: #000;
  color: rgba(249, 198, 26, 1);
  padding: 0 0.5rem;
  display: inline-block;
  transform-origin: right center;
}
.wrapper {
  position: relative;
  perspective: 80em;
  display: grid;
  transform-style: preserve-3d;
  border-radius: 5px;
}
.wrapper:before {
  border-radius: 5px;
  --bw: 9px;
  grid-area: 1 / 1;
  content: '';
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  margin-top: calc(-1 * var(--bw));
  margin-left: calc(-1 * var(--bw));
  background: transparent;
  transform: translateX(-60px) rotateY(-10deg) rotateX(5deg) scale(1.03);
  pointer-events: none;
  border: var(--bw) solid #000;
  box-sizing: content-box;
}

.wrapper:hover > div,
.wrapper:hover:before {
  transform: none;
}

.wrapper > div,
.wrapper:before {
  will-change: transform;
  transition: .3s transform cubic-bezier(.25,.46,.45,1);
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