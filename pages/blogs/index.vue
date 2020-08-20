<template>
  <div>
    <section class="section">
      <div class="blogs-page">
        <p class="title" style="text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;color: #f39c12;padding-bottom:2rem;">ramblings of a madman</p>
        <div class="wrapper">
          <div class="card">
            <div class="columns is-mobile">
              <!-- posts -->
              <div class="column is-8">
                <!-- blog -->           
                <div 
                  v-for="blog in publishedBlogs" 
                  :key="blog._id"
                  class="section"
                >
                  <div class="post">
                    <div @click="$router.push(`/blogs/${blog.slug}`)" class="post-header clickable">
                      <h4 class="title">{{blog.title}}</h4>
                      <h5 class="subtitle">{{blog.subtitle}}</h5>
                    </div>
                    <div class="post-content">                   
                      <figure class="avatar">
                        <img :src="blog.author.avatar" class="avatar"/>
                      </figure> {{blog.author.name}}, {{blog.createdAt | formatDate}}
                    </div>
                  </div>
                </div>
                <!-- end of blog -->
                <!-- pagination -->
                <div v-if="pagination.pageCount && pagination.pageCount > 1" class="section">
                  <no-ssr placeholder="Loading...">
                    <paginate
                      v-model="currentPage"
                      :page-count="pagination.pageCount"
                      :click-handler="fetchBlogs"
                      :prev-text="'Prev'"
                      :next-text="'Next'"
                      :container-class="'paginationContainer'">
                    </paginate>
                  </no-ssr>
                </div>
                <!-- end of pagination -->
              </div>
              <!-- side bar -->
              <div class="column is-narrow">
                <!-- featured -->
                <div class="section featured-check">
                  <div class="sidebar">
                    <div class="sidebar-header">
                      <h4 class="title">Featured ramblings</h4>
                    </div>
                    <div class="sidebar-list">
                      <!-- Featured Blogs -->
                      <p
                        v-for="fBlog in featuredBlogs"
                        :key="fBlog._id">
                        <nuxt-link :to="`/blogs/${fBlog.slug}`">
                          {{fBlog.title}}
                        </nuxt-link>
                      </p>
                      <!-- Featured Blogs -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- end of side bar -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Footer from '~/components/shared/Footer'
export default {
  head: {
    title: 'Ramblings | Nico Tukiainen'
  },
  components: {
    Footer
  },
  computed: {
    ...mapState({
      publishedBlogs: state => state.blog.items.all,
      featuredBlogs: state => state.blog.items.featured,    
      pagination: state => state.blog.pagination
    }),
    currentPage: {
      get() {
        return this.$store.state.blog.pagination.pageNum
      },
      set(value) {
        this.$store.commit('blog/setPage', value)
      }
    }
  },
  async fetch({store, query}) {
    // Try to get values from query
    const filter = {}
    const {pageNum, pageSize} = query
    if (pageNum && pageSize) {
      filter.pageNum =  parseInt(pageNum, 10)
      filter.pageSize = parseInt(pageSize, 10)
      store.commit('blog/setPage', filter.pageNum)
    } else {
      // TODO: Maybe getters ?
      filter.pageNum = store.state.blog.pagination.pageNum
      filter.pageSize = store.state.blog.pagination.pageSize
    }
    await store.dispatch('blog/fetchBlogs', filter)
    await store.dispatch('blog/fetchFeaturedBlogs', {'filter[featured]': true})
  },
  methods: {
    setQueryPaginationParams() {
      const { pageSize, pageNum } = this.pagination
      this.$router.push({query: {pageNum, pageSize}})
    },
    fetchBlogs() {
      const filter = {}
      filter.pageSize = this.pagination.pageSize
      filter.pageNum = this.pagination.pageNum
      // Here store the query params!
      this.$store.dispatch('blog/fetchBlogs', filter)
        .then(_ => this.setQueryPaginationParams())
    }
  }
}
</script>
<style scoped lang="scss">
.blogs-page {
  flex: 1;
  padding-top: 14rem;
  position: relative;
  max-width: 1400px;
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
color: #643f03;
font-family: 'Shadows Into Light', cursive;
font-size: 30px;
letter-spacing: 2px;
font-weight: bold;
// text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
/* .post, .sidebar {
  background: rgba(236, 240, 241, 0.7); ;
} */
.avatar img {
height: 32px;
width: 32px;
background: #fff;
border-radius: 50%;
-webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
margin-right: 8px;
}
.post-content {
display: flex;
justify-content: flex-start;
font-style: italic;
align-items: center;
}
.pagination-content {
display: flex;
justify-content: flex-end;
}
.clickable {
cursor: pointer;
}
#root {
  flex: 1 0 auto;
}
*:focus {
  outline: none;
}
a {
  transition: all .35s;
  color: #000;
}
.button:focus {
  border-color: #d74436;
  box-shadow: 0 0 0 0;
}
.input, .textarea, .input[type] {
  font-size: 1.1rem;
}
.input:focus, .textarea:focus, .input[type]:focus {
  border: 2px solid #d74436;
}
/* this is used when inline-styled content
  overlaps text backgrounds in a really ugly way */
.buffer {
  padding-bottom: 1.1rem;
}
/* navigation */
.nav {
  background-color: #0d0c0d;
}
.nav-left {
  padding-left: 2rem;
}
.nav-right, .nav-center {
  padding-right: 2rem;
}
a.nav-item.is-tab {
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  color: #fff;
  padding: 0.4rem;
}
a.nav-item:hover {
  color: #d74436;
}
a.nav-item.is-tab:hover {
  border-bottom: 4px solid #d74436;
}
/* main content */
.main-content {
  padding: 80px 0 2rem 0;
  min-height: 800px
}
.main-content .container {
padding: 2rem;
border: 1px dashed #f1c40f;
border-radius: 5px;
background-color: rgba(189, 195, 199, 0.3);
}
.section-header {
  padding-bottom: 3rem;
}
.section-header .title {
  text-transform: uppercase;
  color: #4a4a4a;
  font-size: 1.3rem;
}
.section-header a {
  color: #d74436;
  font-weight: 700;
}
.section-header a:hover {
  color: #e50076;
}
/* sidebar */
.sidebar-header {
  border-color: #d35400;
  padding-bottom: 1rem;
  border-bottom: 4px solid #d35400;
}
.sidebar-header .title, .sidebar-header-single .title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.3rem;
}
.sidebar-list p, .sidebar-list-single p {
  font-size: 1.1rem;
  font-weight: 300;
  padding-bottom: 0.8rem;
}
.sidebar-list a {
  color: #4a4a4a;
}
.sidebar-list, .post-content, .sidebar-list-single {
  padding-top: 1.4rem;
}
.sidebar-list-nav {
  padding-top: 1rem;
}
.sidebar-list-nav .is-tab {
  padding-right: 1rem;
}
.sidebar-footer-single {
  padding-top: 2rem;
}
.sidebar-footer-single a {
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1rem;
  border-right: 4px solid #d74436;
  padding-right: 1rem;
}
.sidebar-footer-single a:hover {
  color: #363636;
}
/* post */
.post-header, .sidebar-header-single {
  border-color: #d35400;
  padding-left: 1rem;
  border-left: 4px solid #d35400;
}
.post-header .title {
  font-weight: 700;
  font-size: 1.8rem;
  color: rgba(0,0,0,.84)!important;
  fill: rgba(0,0,0,.84)!important;
}
.post-header .subtitle, .sidebar-header-single .subtitle {
  font-size: 1.1rem;
}
.post-content p, .post-single-content p {
  margin-bottom: 0.8rem;
}
.post-content, .post-single-content {
  font-size: 1.1rem;
  font-weight: 300;
}
/* override */
.post-single-content form p:nth-child(even) {
  border-right: 0;
}
.post-single-content form label {
  text-transform: uppercase;
  color: #4a4a4a;
  padding-bottom: 0.2rem;
}
.post-single-content form .input[type] {
  padding-top: 0.2rem;
}
.post-single-content p:nth-child(even) {
  border-right: 4px solid #d74436;
  padding-right: 1rem;
}
.post-content a {
  color: #d74436;
}
.card-content-form form {
  padding-top: 1.5rem;
}
.post-footer {
  padding: 1.5rem 0 0 0;
}
/* pagination */
.pagination-content {
  border-right: 4px solid #d74436;
  padding-right: 1rem;
}
.pagination-link.is-current {
  background-color: #d74436;
  border-color: #d74436;
}

/* flipper */
.card {
  padding: 2rem;
  border-radius: 5px;
  grid-area: 1 / 1;
  transform: translateX(-60px) rotateY(-30deg) rotateX(15deg) scale(1.03);
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
  transform: translateX(10px) rotateY(25deg) rotateX(10deg);
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
@media screen and (max-width: 314px) {
  .container {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .featured-check {
    display: none;
  }
  .column.is-4.is-narrow {
    display: none;
  }
  .column.is-8 {
    width: 100% !important;
  }
}
@media screen and (min-width: 314px) and (max-width: 1024px){
  .container {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .featured-check {
    display: none;
  }
  .column.is-4.is-narrow {
    display: none;
  }
  .column.is-8 {
    width: 100% !important;
  }
}
</style>