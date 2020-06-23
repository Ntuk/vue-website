<template>
  <div class="card ">
    <div class="card-image">
      <figure class="image is-4by2">
        <img :src="image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    requirements: {
      type: Array,
      default: null
    },
    navigateTo: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: false
    }
  }
}
</script>
<style scoped lang="scss">
  .card-content {
    padding: 0;
  }
  .card {
    z-index: 9999;
    min-width: 330px;
    height: 100%;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);
    .title {
      color: gray;
    }
    .subtitle {
      color: gray;
    }
    .project-features {
      font-size: 17px;
    }
  }
</style>