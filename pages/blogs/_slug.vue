<template>
  <div class="wrapper" :class="{'wrapper-transformation' : pageLoaded }">
    <div class="card" :class="{'transformation' : pageLoaded }">
      <div class="blog-editor-container">
        <div class="blog-section-user">
          <user-tile
            :name="blog.author.name"
            :avatar="blog.author.avatar"
            :date="blog.createdAt | formatDate"
          />
        </div>
        <editor-view :initialContent="blog.content" />
      </div>
    </div>
  </div>
</template>

<script>
import UserTile from '~/components/shared/UserTile'
import EditorView from '~/components/editor/EditorView'
export default {
  data() {
    return {
      pageLoaded: false,
    }
  },
  methods: {
    loadPage() {      
      this.pageLoaded = true
    }
  },
  mounted() {
    this.loadPage()
  },
  head() {
    return {
      title: this.blog.title,
      meta: [
        { hid: 'description', name: 'description', content: this.blog.subtitle }
      ]
    }
  },
  components: {
    UserTile,
    EditorView
  },
  computed: {
    blog() {
      return this.$store.state.blog.item
    }
  },
  async fetch({store, params}) {
    await store.dispatch('blog/fetchBlogBySlug', params.slug)
  }
}
</script>
<style scoped lang="scss">
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
  color: #f39c12;
  font-family: 'Shadows Into Light', cursive;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: bold;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
.blog-content, .blog-section-user {
  max-width: 800px;
  margin: 10px auto;
}
.card {
  padding: 2rem;
  border-radius: 5px;
  grid-area: 1 / 1;
  // transform: translateX(10px) rotateY(25deg) rotateX(10deg);
  transform: translateX(-10px) rotateY(-1deg) rotateX(2deg) scale(1.03);
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
.wrapper {
  position: relative;
  perspective: 80em;
  display: grid;
  transform-style: preserve-3d;
  border-radius: 5px;
}
.card .enclosed {
  background: #000;
  line-height: 1;
  color: rgba(249, 198, 26, 1);
  padding: 0 5px;
  display: inline-block;
  transform: translate(-1px, 1px) scale(0.75);
  transform-origin: right center;
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
  transform: translateX(-10px) rotateY(-165deg) rotateX(-22deg) scale(1.03);
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
  transition: 2.3s transform cubic-bezier(.25,.46,.45,1);
}

.transformation {
  transform: none !important;
}
.wrapper-transformation {
  &::before {
    transform: none !important;
  }
}

</style>

