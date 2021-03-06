<template>
  <div>
    <Hero
      :title="projectHero.title"
      :subtitle="projectHero.subtitle"
      :image="projectHero.image"
      :promoLink="projectHero.product && projectHero.product.productLink"
    />

    <section class="section" id="f-projects">
      <div class="container">
        <div class="is-flexible" style="justify-content:center;padding:4rem 0;">
          <h1 class="title">
            <span class="is-icon"><i class="fa fa-arrow-down fa-xs" style="color:white;"/></span>
              showcasing four latest projects
            <span class="is-icon"><i class="fa fa-code fa-xs" style="color:white;"/> </span>
          </h1>
          <h1 class="title" @click="$router.push(`/projects/`)"><a href="/projects" style="margin-left: 0.75rem;">check out all projects</a></h1>
        </div>
        <div class="rows">
          <div
            v-for="project in projects.slice(0, 4)"
            :key="project._id" 
            class="row is-one-quarter"
          >
            <project-card :project="project"/>              
          </div>
        </div>
      </div>
    </section>

    <section class="section"  id="f-ramblings">
      <div class="container">
        <div class="is-flexible" style="justify-content:center;padding-bottom:4rem;">
          <h1 class="title">
            <span class="is-icon"><i class="fa fa-arrow-down fa-xs" style="color:white;padding-right:1rem;"/></span>
              three featured ramblings
            <span class="is-icon"><i class="fa fa-umbrella-beach fa-xs" style="color:white;"/> </span>
          </h1>
          <h1 class="title" @click="$router.push(`/blogs/`)"><a href="/blogs" style="margin-left: 0.75rem;">read all ramblings</a></h1>
        </div>
        <div class="columns">
          <div            
            v-for="blog in featuredBlogs" :key="blog._id">
            <blog-card
              :key="blog._id"
              :blog="blog"
              class="column"
            />              
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="f-footer">
      <div class="footer-container">
      <div class="footer-left-side" style="align-items:center;">
        <p class="title">© Nico Tukiainen 2020</p>
      </div>
      <div class="footer-center">
        <WordCloud/>
      </div>
      <div class="footer-right-side" style="align-items:center;">
        <div>
          <span class="icon">
            <a target="_" href="https://github.com/Ntuk"><i class="fab fa-github fa-lg" fa-rotate-270></i></a>
          </span>
        </div>
        <div>
          <span class="icon">
            <a target="_" href="https://www.facebook.com/nico.tukiainen"><i class="fab fa-facebook fa-lg"></i></a>
          </span>
        </div>
        <div>
          <span class="icon">
            <a target="_" href="https://www.instagram.com/nicotuk/"><i class="fab fa-instagram fa-lg"></i></a>
          </span>
        </div>
        <div>
          <span class="icon">
            <a target="_" href="https://discordapp.com/users/ntuk#2369"><i class="fab fa-discord fa-lg"></i></a>
          </span>
        </div>
        <div>
          <span class="icon">
            <a target="_" href="https://www.linkedin.com/in/nico-tukiainen-a97442131/"><i class="fab fa-linkedin fa-lg"></i></a>
          </span>
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
import WordCloud from '~/components/shared/WordCloud'
import wordcloud from 'vue-wordcloud'
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Nico Tukiainen'
  },
  components: {
    ProjectCard, BlogCard, Hero, ProjectCardTooltip, WordCloud
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
a {
  color: #e67e22;

  &:hover {
    color: white;
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
.section {
  padding: 0;
}
#f-projects {
  position: relative;
  padding-bottom: 5rem;
  margin-bottom: -5rem;
  background:
    linear-gradient(to bottom right, rgba(70,104,138,1) 15%, transparent),
    radial-gradient(circle at 100% 0%, rgba(70,104,138,1) 0%, transparent 20%) center center / 15px 15px,
    linear-gradient(to bottom right, rgba(52,73,94,1), rgba(52,73,94,1));
}
#f-ramblings {
  top: -17rem;
  padding-top: 5rem;
  background: radial-gradient(circle, rgb(129, 129, 167) 0%, rgba(151,151,193,1) 100%);
  background:
    linear-gradient(to top left, rgb(129, 129, 167) 15%, transparent),
    radial-gradient(circle at 100% 0%, rgb(129, 129, 167) 0%, transparent 15%) center center / 15px 15px,
    linear-gradient(to top right, rgba(151,151,193,1), rgba(151,151,193,1));
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
}
#f-footer {
  padding-top: 5rem;
  background:
    linear-gradient(to bottom right, rgba(70,104,138,1) 15%, transparent),
    radial-gradient(circle at 100% 0%, rgba(70,104,138,1) 0%, transparent 20%) center center / 15px 15px,
    linear-gradient(to bottom right, rgba(52,73,94,1), rgba(52,73,94,1));
}
.footer-container {
  display: flex;
  justify-content: space-between;
}
.footer-left-side  {
  justify-content: space-evenly;
  display: flex;
  width: 40%;
  font-size: 14px;
  color: #e67e22;   
}
.footer-center {
  width: 20%;
  justify-content: space-evenly;
  color: #e67e22;
  font-size: 14px;
}
.footer-right-side {
  width: 40%;
  order: 1;
  display: flex;
  justify-content: space-evenly;

  a {
    color: #f39c12;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    padding-left: 0.75rem;
  }
  .icon {
    &:hover {
      text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
      color: rgb(229, 244, 248);

      a {
        transform-origin: center;
        will-change: transform;
        transform: scale(1.2);
        transition: 0.3s;
        color: white;
      }
    }
  }
}
.footer-custom {
    background-color: #0d0c0d;
    color: #fff;
}
.footer-custom p {
    font-size: 1rem;
    font-weight: 500;
}
.footer-custom a {
    color: #e67e22;
}
.footer-custom a:hover {
    color: #d35400;
}
</style>
