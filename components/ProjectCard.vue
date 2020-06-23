<template>
  <div class="card">
    <nuxt-link :to="`/projects/${project.slug}`">
      <div class="card-image">
        <figure class="image is-4by2">
          <img :src="project.image" alt="Placeholder image">
        </figure>
      </div>
    </nuxt-link>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{project.title | shortenText(45)}}</p>
          <p class="subtitle is-6"><i>{{project.author.name}}</i></p>
        </div>
      </div>
      <div class="content">
        {{project.subtitle | shortenText(45)}}
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="`/projects/${project.slug}`" class="card-footer-item link">More Information</nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-image {
    filter: grayscale(0);
    transition: .3s ease-in-out;
    
    &:hover {
      filter: grayscale(100%);
    }
  }
  .link {
    color: #e67e22;
  }
</style>